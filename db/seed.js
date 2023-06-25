const md5 = require("md5");

module.exports =
  {
    user: [
      [
        "user1",
        "user1@email.com",
        md5("pass1"),
      ],
      [
        "user2",
        "user2@email.com",
        md5("pass2"),
      ],
      [
        "user3",
        "user1@email.com",
        md5("pass1")
      ]
    ],
    category: [
      ["Shopping"],
      ["Groceries"],
      ["Entertainment"]
    ],
    merchant: [
      ["Amazon"],
      ["Whole Foods"],
      ["AMC"]
    ],
    budget: [
      [
        100,
        1,
        3
      ],
      [
        200,
        3,
        1
      ],
      [
        150,
        2,
        2
      ]
    ],
    expense: [
      [
        '05/08/23',
        25.50,
        "Bought movie snacks",
        "credit",
        1,
        3,
        3
      ],
      [
        '12/15/22',
        89.99,
        "Holiday gifts",
        "credit",
        3,
        1,
        1
      ],
      [
        '04/29/23',
        54.23,
        "Weekly grocery trip",
        "debit",
        2,
        2,
        2
      ],
    ],
  }
