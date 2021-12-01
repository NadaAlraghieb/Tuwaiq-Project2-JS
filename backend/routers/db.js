const users = [
  {
    id:1,
    nationalId: "1010",
    firstName: "Nada",
    lastName:"AlRaghieb",
    password: "994",
    userInfo: [
      {
        name: "Driving_Licenses",
        image:"./img/drive.png",
        data: [
          {
            type: "Personal",
            state: "Valid",
            releaseDate: "27/02/2019",
            expiryDate: "20/02/2022",
          },
          
        ],
      },
      {
        name: "Vehicles",
        image: `./img/vehicles.png`,
        data: [],
      },
      {
        name: "Vehicles_Insurance",
        image: `./img/vehicles.png`,
        data: [],
      },
      {
        name: "Traffic_Violations",
        image: `./img/traffic.png`,
        data: [],
      },
      {
        name: "Passports",
        image: `./img/passport.png`,
        data: [],
      },
      {
        name: "Appointments",
        image: `./img/appointments.png`,
        data: [],
      },
      {
        name: "National_Address",
        image: `./img/map.png`,
        data: [
          {
            buildingNumber: "7666",
            postalCode: "66336",
            additionalCode: "1200",
            unitNumber: "10",
            shortTitle: "MJCN5263",
          },
          {
            buildingNumber: "4455",
            postalCode: "99877",
            additionalCode: "4550",
            unitNumber: "2",
            shortTitle: "BNG7656",
          },
        ],
      },
      {
        name: "Qiyas_Exam_Results",
        image: `./img/qiyas.png`,
        data: [{
          testDate: "23/03/2021",
          totalMarks: "80.00",
          typeOfTest: "Teachers",
          appointmentNumber: "1234562",
          notes: "...",
        },
        {
          testDate: "07/06/2020",
          totalMarks: "74.50",
          typeOfTest: "Teachers",
          appointmentNumber: "1234872",
          notes: "...",
        },
      ],
      },
    ],
  },
  {
    id:2,
    nationalId: "1011",
    firstName: "Farah",
    lastName:"AlGharban",
    password: "123",
    userInfo: [
      {
        name: "Driving_Licenses",
        image:"./img/drive.png",
        data: [
          {
            type: "Personal",
            state: "Valid",
            releaseDate: "27/02/2019",
            expiryDate: "20/02/2022",
          },
        ],
      },
      {
        name: "Vehicles",
        image: `./img/vehicles.png`,
        data: [],
      },
      {
        name: "Vehicles_Insurance",
        image: `./img/vehicles.png`,
        data: [],
      },
      {
        name: "Traffic_Violations",
        image: `./img/traffic.png`,
        data: [],
      },
      {
        name: "Passports",
        image: `./img/passport.png`,
        data: [],
      },
      {
        name: "Appointments",
        image: `./img/appointments.png`,
        data: [],
      },
      {
        name: "National_Address",
        image: `./img/map.png`,
        data: [
          {
            buildingNumber: "7666",
            postalCode: "66336",
            additionalCode: "1200",
            unitNumber: "10",
            shortTitle: "MJCN5263",
          },
          {
            buildingNumber: "7666",
            postalCode: "66336",
            additionalCode: "1200",
            unitNumber: "10",
            shortTitle: "MJCN5263",
          },
          
        ],
      },
      {
        name: "Qiyas_Exam_Results",
        image: `./img/qiyas.png`,
        data: [
          {
          testDate: "23/03/2019",
          totalMarks: "75.00",
          typeOfTest: "Teachers",
          appointmentNumber: "123498862",
          notes: "...",
        },
        
      ],
      },
    ],
  },
  {
    id:3,
    nationalId: "1012",
    firstName: "Gahada",
    lastName:"AlShamrani",
    password: "112",
    userInfo: [
      {
        name: "Driving_Licenses",
        image:"./img/drive.png",
        data: [
          {
            type: "Personal",
            state: " ",
            releaseDate: "04/05/2017",
            expiryDate: "20/02/2022",
          },
          
        ],
      },
      {
        name: "Vehicles",
        image: `./img/vehicles.png`,
        data: [],
      },
      {
        name: "Vehicles_Insurance",
        image: `./img/vehicles.png`,
        data: [],
      },
      {
        name: "Traffic_Violations",
        image: `./img/traffic.png`,
        data: [],
      },
      {
        name: "Passports",
        image: `./img/passport.png`,
        data: [
          {
            nuPassport:"L110939",
            passType:"Normal",
            date:"01/08/2012",
            place:"Saudi Arabia",
            dateE:"08/06/2017",
            statues:"Available"
          }

        ],
      },
      {
        name: "Appointments",
        image: `./img/appointments.png`,
        data: [],
      },
      {
        name: "National_Address",
        image: `./img/map.png`,
        data: [
          {
            buildingNumber: "7666",
            postalCode: "66336",
            additionalCode: "1200",
            unitNumber: "10",
            shortTitle: "MJCN5263",
          },
        ],
      },
      {
        name: "Qiyas_Exam_Results",
        image: `./img/qiyas.png`,
        data: [{
          testDate: "23/03/2021",
          totalMarks: "80.00",
          typeOfTest: "Teachers",
          appointmentNumber: "1234562",
          notes: "...",
        },
        {
          testDate: "07/06/2020",
          totalMarks: "74.50",
          typeOfTest: "Teachers",
          appointmentNumber: "1234872",
          notes: "...",
        },
        {
          testDate: "07/06/2019",
          totalMarks: "74.50",
          typeOfTest: "Teachers",
          appointmentNumber: "1234872",
          notes: "...",
        },
      ],
      },
    ],
  },
  
];
module.exports = { users };
