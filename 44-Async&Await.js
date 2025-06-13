// const hasMeeting = false;

// const meeting = new Promise((resolve, reject) => {
//   if (!hasMeeting) {
//     const meetingdetails = {
//       name: "Codeyad Meeting",
//       location: "Tehran",
//       time: "1:00 PM",
//     };
//     resolve(meetingdetails);
//   } else {
//     reject(new Error("Meeting Canceled..."));
//   }
// });

// const addToCalendar = (meetingDetails) => {
//   const calendar = `${meetingDetails.name}
//    is scheduled at ${meetingDetails.time} on
//      ${meetingDetails.location}`;
//   return Promise.resolve(calendar);
// };

// meeting
//   .then(addToCalendar)
//   .then((res) => console.log(res))
//   .catch((rej) => console.log(rej));

// async function myMeeting() {
//   const meetingDetails = await meeting;
//   const message = await addToCalendar(meetingDetails);
//   console.log(message);
// }

// myMeeting();






const firstFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("First Function Executed");
      resolve("Resolved After 3 Sec");
    }, 3000);
  });
};

async function Secondfunction() {
  console.log("Calling FirstFunction");
  const firstFunctionResult = await firstFunction();

  console.log(firstFunctionResult);
}

Secondfunction();

console.log("End");




//Pending

//FullFilled

//Rejected
