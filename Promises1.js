const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingdetails = {
      name: "Codeyad Meeting",
      location: "Tehran",
      time: "1:00 PM",
    };
    resolve(meetingdetails);
  } else {
    reject(new Error("Meeting Canceled..."));
  }
});

const addTocalendar = (meetingdetails) => {
  const calendar = 
  `${meetingdetails.name} is scheduled at ${meetingdetails.time} on ${meetingdetails.location}`;
  return Promise.resolve(calendar);
};

meeting.then(addTocalendar)
.then((res) => console.log(res)).catch((rej) => console.log(rej));
