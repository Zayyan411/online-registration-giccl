const rules = [
  "The student will be required to pay his/her fee/dues after the admission within due date as per merit list.",
  "Fee/dues shall be deposited directly in the Bank Accounts through fee challan in cash only. (Note: Cheque, Demand Draft, Pay Order etc. will not be acceptable.)",
  "For all overseas seats US Dollar 1,000/- shall be charged per student for each year in addition to his/her regular fee.",
  "If a fee challan is lost by the student, he/she will have to pay Rs. 50/- for duplicate fee challan.",
  "Fee/dues once paid by the students shall be refunded as per National Level Fee Refund Policy issued by Higher Education Commission, Islamabad.",
  "As per tax rules, the University shall collect Advance Tax (on behalf of the Government) @ 5% on the entire amount of fee (if payable exceeds Rs.200,000 per annum).",
  "A student who wants to apply for fee concession on the basis of Kinship may submit his/her Fee Concession Form within due date.",
  "In case, student fails to pay his/her dues by the specified dates (as per fee notices issued by the Treasurer’s Office) he/she will be fined as under:",
];

const fines = [
  { period: "Within 10 days after due date", fine: "500/-" },
  { period: "After 10 days", fine: "2000/-" },
  { period: "After one month from due date", fine: "5000/-" },
];

const footnotes = [
  "Late fee fine shall not be charged to the applicants of scholarship/Financial Aid upto 10th day from the date of decision.",
  "The University/Hostel security shall be refunded if all university dues have been paid.",
  "If duration of study in MS, M.Phil & Ph.D programs is extended due to any reason (s), fee for that period shall be charged (semester-wise).",
  "The students will pay their fee/dues as per schedule issued by the Treasurer’s Office.",
];
const programGroups = [
  {
    title: "Humanities & Arts Programs (66,850 / 40,130)",
    programs: [
      "IE English Literature",
      "IE History",
      "IE Islamic Studies",
      "IE Persian",
      "IE Philosophy",
      "IE Political Sciences",
      "IE Punjabi",
      "IE Urdu",
      "IE Sociology",
      "IE The Arts (B'Ki)",
      "IE B'A Painting",
      "IE Art History",
      "IE Archive Studies",
      "IE Global Studies",
      "IE Public Policy & Governance",
      "IE Translation Studies",
      "IE Turkish Language & Literature",
      "IE Education",
      "IE Special Education",
    ],
    semester1Fee: "66,850",
    semester2Fee: "40,130",
  },
  {
    title: "Science & Professional Programs (70,050 / 43,530)",
    programs: [
      "IE Botany",
      "IE Biology",
      "IE Chemistry",
      "IE Economics",
      "IE Geography",
      "IE Mathematics",
      "IE Physics",
      "IE Psychology",
      "IE Statistics",
      "IE Zoology",
      "IE Gender and Clinical Change",
      "IE Disaster Management",
      "IE Business Accounting & Finance",
      "IE Physical Education & Sports Science",
      "IE Entrepreneurship",
      "IE ESME",
      "IE Agriculture (Agronomy)",
      "IE Food Science & Technology",
    ],
    semester1Fee: "70,050",
    semester2Fee: "43,530",
  },
];
export { rules, fines, footnotes, programGroups };
