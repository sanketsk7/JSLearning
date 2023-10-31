let professor = {
  name: "Patil Sir",
  college: "Engineering",
  Role: "Head of Department",
  Location: "Kolhapur",
  sub: "Maths",
};
console.log(professor);

console.log(`--------Added nested properties-----------`);

const collegeDetails = {
  degrees: {
    engineering: "CSC",
    PHD: `Advanced Computing`,
    specialization: `MBA`,
    collegeName: `TKIET`,
  },

  certificates: [
    `Hacker Rank Participation`,
    `Certificate in IFE course`,
    `certificate in advanced programming`,
  ],
};
console.log(collegeDetails.degrees);
console.log(collegeDetails.certificates);

console.log(`------Added new property-------`);
professor.totalExperience = `14 Years`;
console.log(professor);

console.log(`-------Update Property--------`);
professor.Location = `Pune`;
console.log(professor);

console.log(`--------Add new one property------------`);
collegeDetails.certificates.push("Oracle Certified");
console.log(collegeDetails.certificates);

console.log(`--------Last element of Certificate--------`);
collegeDetails.certificates[collegeDetails.certificates.length - 1];
console.log(collegeDetails.certificates);

for (const certificate of collegeDetails.certificates) {
  console.log(certificate);
}
