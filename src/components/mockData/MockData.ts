import { Account } from "@/utils/types";

export const mockAccounts: Account[] = [
  {
    account_id: "ACC001",
    holder: {
      firstName: "Andrew",
      lastName: "McNulty",
      phoneNumber: "+1-224-463-7589",
      nickName: "jford",
      gender: "Male",
      email: "a*@gmail.com",
      jointNames: "",
      username: "sample1",
      password: "sample1",
    },
    bank_details: {
      account_type: "Checking",
      balance_usd: 115678.0,
      current_balance_usd: 0.0,
    },
    transaction_mgs_code: {
      transaction_text_msg:
        "To continue this transaction, Please enter the code sent to you",
      transaction_code: "",
      wireDate: true,
    },
    transaction_history: [
      {
        transaction_id: "TXN001",
        dateTime: "June 10 2024, 3:32:32 am",
        description: "Grimms supply holding's",
        status: "Success",
        amount_usd: 58000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN002",
        dateTime: "April 15 2023, 1:04:02 pm",
        description: "Transfer from TABITHA MARTEL",
        status: "Success",
        amount_usd: 250000.0,
        account_no: "****2930",
      },
      {
        transaction_id: "TXN003",
        dateTime: "February 8 2022, 10:11:22 am",
        description: "Transfer from NICHOLAS DUKE",
        status: "Success",
        amount_usd: 650000.0,
        account_no: "****3839",
      },
      {
        transaction_id: "TXN004",
        dateTime: "July 2 2021, 7:08:32 am",
        description: "Transfer from BRANDON PERKINS",
        status: "Success",
        amount_usd: 175000.0,
        account_no: "****3249",
      },
      {
        transaction_id: "TXN005",
        dateTime: "November 23 2020, 1:15:02 pm",
        description: "Sinlair's Store - Trx",
        status: "Success",
        amount_usd: -650.0,
        account_no: "****1403",
      },
      {
        transaction_id: "TXN006",
        dateTime: "April 23 2020, 8:15:02 pm",
        description: "Project Milestone Payment",
        status: "Success",
        amount_usd: 65000.0,
        account_no: "****1403",
      },
      {
        transaction_id: "TXN007",
        dateTime: "March 15, 2019, 7:20:15 am",
        description: "Project Completion Bonus",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5012",
      },
      {
        transaction_id: "TXN008",
        dateTime: "February 12, 2019, 10:45:00 am",
        description: "Walmart",
        status: "Success",
        amount_usd: -4000.0,
        account_no: "****5013",
      },
      {
        transaction_id: "TXN009",
        dateTime: "April 16, 2019, 2:45:15 pm",
        description: "AT&T",
        status: "Success",
        amount_usd: -400.0,
        account_no: "****5007",
      },
      {
        transaction_id: "TXN010",
        dateTime: "April 23 2020, 8:15:02 pm",
        description: "Project Milestone Payment",
        status: "Success",
        amount_usd: 65000.0,
        account_no: "****1403",
      },
      {
        transaction_id: "TXN011",
        dateTime: "March 15, 2019, 7:20:15 am",
        description: "Project Completion Bonus",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5012",
      },
      {
        transaction_id: "TXN012",
        dateTime: "February 12, 2019, 10:45:00 am",
        description: "Walmart",
        status: "Success",
        amount_usd: -4000.0,
        account_no: "****5013",
      },
      {
        transaction_id: "TXN013",
        dateTime: "April 16, 2019, 2:45:15 pm",
        description: "AT&T",
        status: "Success",
        amount_usd: -400.0,
        account_no: "****5007",
      },
      {
        transaction_id: "TXN014",
        dateTime: "April 23 2020, 8:15:02 pm",
        description: "Project Milestone Payment",
        status: "Success",
        amount_usd: 65000.0,
        account_no: "****1403",
      },
      {
        transaction_id: "TXN015",
        dateTime: "March 15, 2019, 7:20:15 am",
        description: "Project Completion Bonus",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5012",
      },
      {
        transaction_id: "TXN016",
        dateTime: "February 12, 2019, 10:45:00 am",
        description: "Walmart",
        status: "Success",
        amount_usd: -4000.0,
        account_no: "****5013",
      },
      {
        transaction_id: "TXN017",
        dateTime: "April 16, 2019, 2:45:15 pm",
        description: "AT&T",
        status: "Success",
        amount_usd: -400.0,
        account_no: "****5007",
      },
    ],
  },
  {
    account_id: "ACC002",
    holder: {
      firstName: "Dr James Allen, Jr (DDS dentistry",
      lastName: "",
      nickName: "Dr.",
      email: "d*@gmail.com",
      jointNames: "",
      username: "HensonA101",
      password: "Lawcleg112",
    },
    bank_details: {
      account_type: "Checking",
      balance_usd: 150000.0,
      current_balance_usd: 0.0,
    },
    transaction_mgs_code: {
      transaction_text_msg:
        "To continue this transaction, Please enter the code sent to you",
      transaction_code: "",
      wireDate: true,
    },
    transaction_history: [
      {
        transaction_id: "TXN001",
        dateTime: "July 17 2024, 8:03:06 am",
        description: "Transfer from J. David Thompson Estate",
        status: "Success",
        amount_usd: 150000.0,
        account_no: "****5009",
      },
    ],
  },
  {
    account_id: "ACC003",
    account_type: "current",
    holder: {
      firstName: "Maria Peoples",
      lastName: "",
      nickName: "",
      email: "m*@gmail.com",
      jointNames: "",
      username: "Bryant01",
      password: "Onelove",
    },
    bank_details: {
      account_type: "Checking",
      balance_usd: 35000.0,
      current_balance_usd: 25000.0,
    },
    transaction_mgs_code: {
      transaction_text_msg:
        "To continue this transaction, Please enter the code sent to you",
      transaction_code: "",
      wireDate: true,
    },
    transaction_history: [
      {
        transaction_id: "TXN001",
        dateTime: "July 31 2024, 12:03:06 pm",
        description: "Deposit from Kelvin Mills",
        status: "Pending",
        amount_usd: 25000.0,
        account_no: "****5009",
      },
    ],
  },
  {
    account_id: "ACC004",
    account_type: "",
    holder: {
      firstName: "David Bill Morales",
      lastName: "",
      phoneNumber: "281-497-9969",
      email: "david.morales45@hotmail.com",
      jointNames: "",
      username: "DavidM9",
      password: "Davidandpaulee2",
    },
    bank_details: {
      account_type: "Checking",
      balance_usd: 2850000.0,
      current_balance_usd: 0.0,
    },
    transaction_mgs_code: {
      transaction_text_msg:
        "To continue this transaction, please enter the code sent to you",
      transaction_code: "2378322762",
      lastStepText:
        "Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.",
      wireDate: true,
    },
    transaction_history: [
      {
        transaction_id: "TXN001",
        dateTime: "August 10 2021",
        description: "Transfer from Dollar General",
        status: "Success",
        amount_usd: -2000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN002",
        dateTime: "June 15 2021",
        description: "Transfer from CVS Pharmacy",
        status: "Success",
        amount_usd: -4000.0,
        account_no: "****2930",
      },
      {
        transaction_id: "TXN003",
        dateTime: "February 8 2021",
        description: "Transfer from Ace Cash Express",
        status: "Success",
        amount_usd: -6350.0,
        account_no: "****3839",
      },
      {
        transaction_id: "TXN004",
        dateTime: "January 25 2021",
        description: "Transfer from Ross Stores",
        status: "Success",
        amount_usd: -5500.0,
        account_no: "****3249",
      },
      {
        transaction_id: "TXN005",
        dateTime: "January 20 2021",
        description: "Amazon Fresh",
        status: "Success",
        amount_usd: -350.0,
        account_no: "****3839",
      },
      {
        transaction_id: "TXN006",
        dateTime: "September 23 2020",
        description: "7 Eleven",
        status: "Success",
        amount_usd: -650.0,
        account_no: "****1403",
      },
      {
        transaction_id: "TXN007",
        dateTime: "April 23 2020",
        description: "Mortgage Interest",
        status: "Success",
        amount_usd: 40000.0,
        account_no: "****1403",
      },
      {
        transaction_id: "TXN008",
        dateTime: "April 21 2020",
        description: "Walmart",
        status: "Success",
        amount_usd: -200.0,
        account_no: "****1403",
      },
      {
        transaction_id: "TXN009",
        dateTime: "March 15, 2020",
        description: "Wire Transfer Payment",
        status: "Success",
        amount_usd: 40000.0,
        account_no: "****5012",
      },
      {
        transaction_id: "TXN010",
        dateTime: "March 10, 2020",
        description: "Walmart",
        status: "Success",
        amount_usd: -450.0,
        account_no: "****5012",
      },
      {
        transaction_id: "TXN011",
        dateTime: "March 5, 2020",
        description: "Walmart",
        status: "Success",
        amount_usd: -300.0,
        account_no: "****5012",
      },
      {
        transaction_id: "TXN012",
        dateTime: "February 20, 2020",
        description: "Bill Payment",
        status: "Success",
        amount_usd: -3000.0,
        account_no: "****5013",
      },
      {
        transaction_id: "TXN013",
        dateTime: "February 17, 2020",
        description: "Walmart",
        status: "Success",
        amount_usd: -500.0,
        account_no: "****5007",
      },
      {
        transaction_id: "TXN014",
        dateTime: "February 16, 2022",
        description: "Walmart",
        status: "Success",
        amount_usd: -100.0,
        account_no: "****1403",
      },
      {
        transaction_id: "TXN015",
        dateTime: "February 15, 2020",
        description: "Walmart",
        status: "Success",
        amount_usd: -750.0,
        account_no: "****5012",
      },
      {
        transaction_id: "TXN016",
        dateTime: "February 12, 2020",
        description: "Walmart",
        status: "Success",
        amount_usd: -350.0,
        account_no: "****5013",
      },
      {
        transaction_id: "TXN017",
        dateTime: "October 12, 2019",
        description: "Walmart",
        status: "Success",
        amount_usd: -120.0,
        account_no: "****5007",
      },
      {
        transaction_id: "TXN018",
        dateTime: "September 23, 2019",
        description: "Verizon",
        status: "Success",
        amount_usd: -410.0,
        account_no: "****5007",
      },
      {
        transaction_id: "TXN019",
        dateTime: "September 8 2019",
        description: "Zelle Transfer #c1cvsjsjsk",
        status: "Success",
        amount_usd: 2000.0,
        account_no: "****1403",
      },
      {
        transaction_id: "TXN020",
        dateTime: "August 25, 2019",
        description: "Zelle transfer #c5ceweskw",
        status: "Success",
        amount_usd: 1900.0,
        account_no: "****5012",
      },
      {
        transaction_id: "TXN021",
        dateTime: "August 12, 2019",
        description: "Walmart",
        status: "Success",
        amount_usd: -1050.0,
        account_no: "****5013",
      },
      {
        transaction_id: "TXN02122",
        dateTime: "August 5, 2019",
        description: "Credit from Zendesk",
        status: "Success",
        amount_usd: 350000.0,
        account_no: "****5013",
      },
      {
        transaction_id: "TXN022",
        dateTime: "July 20, 2019",
        description: "Chase Credit Card Bill",
        status: "Success",
        amount_usd: -1900.0,
        account_no: "****5007",
      },
      {
        transaction_id: "TXN023",
        dateTime: "July 18, 2019",
        description: "Walmart",
        status: "Success",
        amount_usd: -1100.0,
        account_no: "****5007",
      },
      {
        transaction_id: "TXN024",
        dateTime: "June 16, 2019",
        description: "AT&T",
        status: "Success",
        amount_usd: -400.0,
        account_no: "****5007",
      },
      {
        transaction_id: "TXN025",
        dateTime: "June 4, 2019",
        description: "Walmart",
        status: "Success",
        amount_usd: -1100.0,
        account_no: "****5007",
      },
      {
        transaction_id: "TXN018343",
        dateTime: "April 6, 2019",
        description: "Transfer from David bill external Account",
        status: "Success",
        amount_usd: 1500000.0,
        account_no: "****5007",
      },
      {
        transaction_id: "TXN018343",
        dateTime: "April 4, 2019",
        description: "Transfer from David bill external Account",
        status: "Success",
        amount_usd: 1000000.0,
        account_no: "****5007",
      },
      {
        transaction_id: "TXN01934343",
        dateTime: "March 4, 2019",
        description: "Account Open",
        status: "Success",
        amount_usd: 100.0,
        account_no: "****5007",
      },
    ],
  },
  {
    account_id: "ACC005",
    account_type: "",
    holder: {
      firstName: "Lester",
      lastName: "Dorr",
      phoneNumber: "",
      email: "",
      jointNames: "",
      username: "l",
      password: "l",
      // username: "Lestermarie101",
      // password: "Dorr101@$",
    },
    bank_details: {
      account_type: "Checking",
      balance_usd: 1610000.0,
      current_balance_usd: 0.0,
    },
    transaction_mgs_code: {
      transaction_text_msg:
        "To continue this transaction, please enter the code sent to you",
      transaction_code: "2378322762",
      lastStepText:
        "Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.",
      wireDate: true,
    },
    transaction_history: [
      {
        transaction_id: "TXN005",
        dateTime: "October 9, 2024",
        description: "Wire transfer from Empower Bank",
        status: "Success",
        amount_usd: 420000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN004",
        dateTime: "October 8, 2024",
        description: "Wire transfer from Empower Bank",
        status: "Success",
        amount_usd: 290000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN003",
        dateTime: "October 7, 2024",
        description: "Wire transfer from Empower Bank",
        status: "Success",
        amount_usd: 360000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN002",
        dateTime: "October 6, 2024",
        description: "Wire transfer from Empower Bank",
        status: "Success",
        amount_usd: 220000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN001",
        dateTime: "October 4, 2024",
        description: "Wire transfer from Empower Bank",
        status: "Success",
        amount_usd: 320000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN001",
        dateTime: "September 20 2015",
        description: "Transfer to Charity Home Ca.",
        status: "Success",
        amount_usd: -280000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN002",
        dateTime: "August 15 2015",
        description: "Celeb City Farms ",
        status: "Success",
        amount_usd: 400000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN003",
        dateTime: "May 10 2014",
        description: "Company Officials",
        status: "Success",
        amount_usd: -150750.0,
        account_no: "****2930",
      },
      {
        transaction_id: "TXN003",
        dateTime: "January 5 2014",
        description: "Transfer from Tee~Energy services",
        status: "Success",
        amount_usd: 850000.0,
        account_no: "****2930",
      },
      {
        transaction_id: "TXN004",
        dateTime: "October 19 2013",
        description: "Company Van Maintenance",
        status: "Success",
        amount_usd: -350.0,
        account_no: "****2930",
      },
      {
        transaction_id: "TXN005",
        dateTime: "September 13 2013",
        description: "Transfer from Nikky&co enterprises",
        status: "Success",
        amount_usd: 475000.0,
        account_no: "****3839",
      },
      {
        transaction_id: "TXN006",
        dateTime: "June 24 2012",
        description: "Appointment Form Payment",
        status: "Success",
        amount_usd: 650.0,
        account_no: "****3249",
      },
      {
        transaction_id: "TXN007",
        dateTime: "February 3 2012",
        description: "Department Workers",
        status: "Success",
        amount_usd: -105400.0,
        account_no: "****1403",
      },
      {
        transaction_id: "TXN008",
        dateTime: "December 8 2011",
        description: "Transfer from Chad Estate Management",
        status: "Success",
        amount_usd: 750000.0,
        account_no: "****1403",
      },
      {
        transaction_id: "TXN009",
        dateTime: "May 20 2010",
        description: "Bammy Work Wear and Maintenance",
        status: "Success",
        amount_usd: -4500.0,
        account_no: "****5012",
      },
      {
        transaction_id: "TXN010",
        dateTime: "March 23 2020",
        description: "Transfer from JayJay Group",
        status: "Success",
        amount_usd: 12000.0,
        account_no: "****5013",
      },
    ],
  },
];
