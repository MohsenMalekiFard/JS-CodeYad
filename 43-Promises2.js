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

// const addToCalendar = meetingDetails =>{

//     const calendar=`${meetingDetails.name} is scheduled at ${meetingDetails.time} on
//      ${meetingDetails.location}`;
//      return Promise.resolve(calendar);

// };

// meeting
// .then(addToCalendar)
// .then((res) => console.log(res))
// .catch((rej) => console.log(rej));

// const promise1 = Promise.resolve("Promise 1 complete");
// const promise2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Promise 2 complete");
//   }, 2000);
// });

// Promise.all([promise1,promise2]).then(res=>console.log(res));

function getMessage() {


  return new Promise((resolve,reject)=>{

    setTimeout(function () {
      resolve("Hello CallBack");
    }, 2000);
  });


}

function myFunction(message) {
  console.log(message);
}

getMessage().then(myFunction);
