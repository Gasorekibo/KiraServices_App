import Event from "../models/CalendarEvent.js";

const createEvent = async (req, res) => {
  const { title, description, startTime, endTime } = req.body;

  if (new Date(endTime) < new Date(startTime)) {
    return res
      .status(400)
      .json({ error: "End Time cannot be before Start Time" });
  }

  try {
    // Check if there are any events overlapping with the given date range
    const overlappingEvent = await Event.findOne({
      $or: [
        {
          startTime: { $lte: endTime },
          endTime: { $gte: startTime },
        },
        {
          startTime: { $gte: startTime, $lte: endTime },
        },
        {
          endTime: { $gte: startTime, $lte: endTime },
        },
      ],
    });

    if (overlappingEvent) {
      return res
        .status(409)
        .json({ error: "This Time have Booked Check Another" });
    }

    const event = await Event.create({
      title,
      description,
      startTime,
      endTime,
    });

    if (event) {
      return res.status(201).json({
        _id: event._id,
        title: event.title,
        description: event.description,
        startTime: event.startTime,
        endTime: event.endTime,
      });
    } else {
      return res.status(400).json({ error: "Event creationg Fails try Again" });
    }
  } catch (err) {
    res.status(400).json({ error: "Event creation failed" });
    console.log(err);
  }
};

const getBookedEvent = async (req, res) => {
  try {
    const bookedEvents = await Event.find({});
    res.status(200).json(bookedEvents);
  } catch (error) {
    console.error("Error fetching booked events:", error);
    res.status(500).json({ error: "Error fetching booked events." });
  }
};
export { createEvent, getBookedEvent };