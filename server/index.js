const express = require("express");
const PORT = process.env.PORT || 5001;
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "825351",
  // password: "password",
  port: 3306,
  database: "resturant-reservation-DB",
});

const saltRound = 12;
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
// ------------------Registration--------------------//
app.post("/Registration", async (req, res) => {
  try {
    const { name } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    const { address } = req.body;
    const { city } = req.body;
    const { state } = req.body;
    const { zip } = req.body;
    const wholeAddress = address + ", " + city + " " + state + " " + zip;
    bcrypt.hash(password, saltRound, (_err, hash) => {
      db.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (_err, rows, fields) => {
          console.log(rows.length);
          if (rows.length === 0) {
            db.query(
              "INSERT INTO users (name, email, address, password, role, points) VALUES (?,?,?,?,?,?)",
              [name, email, wholeAddress, hash, "customer", 0]
            );
            res.json("user registered");
          } else {
            res.json("existed email");
          }
        }
      );
    });
  } catch (err) {
    console.log(err.message);
  }
});
// ------------------Login--------------------//
app.post("/login", async (req, res) => {
  const { email } = req.body;
  const { password } = req.body;
  try {
    
    db.query(
      "SELECT password, role, userIDs FROM users WHERE email = ?",
      [email],
      (_err, rows, fields) => {
        console.log(rows[0]);
        
        if (rows.length === 0) {
          console.log("Invalid Credentials");
          return res.json("Invalid Credentials");

        } else if (rows.length !== 0 && rows[0].role === "admin"){
            if (password === rows[0].password) {
              return res.json(rows[0]);
            }else {
              console.log("Invalid Credentials");
              return res.json("Invalid Credentials"); 
            }
        } else if (rows.length !== 0) {
          bcrypt.compare(password,rows[0].password, (err, isValid)=>{
            if (isValid) {
              return res.json(rows[0]);}
          
            else {
              console.log("Invalid Credentials");
              return res.json("Invalid Credentials");     
            }
          });
        }}
    );
  } catch (err) {
    console.log(err.message);
  }
});
// ------------------Admin--------------------//
app.get("/Admin", async (req, res) => {
  try {
    db.query(
      "SELECT * FROM reservation",
      (_err, rows, fields) => {
        
        return res.json(rows);
      }
    )
  } catch (err) {
    console.log(err.message);
  }
})
// ------------------Admin sesearch by Name--------------------//
app.post("/Admin-searchByName", async (req, res) => {
  const { searchName } = req.body;
  console.log(searchName);
  try {
    db.query(
      "SELECT * FROM reservation WHERE fullName=? ",
      searchName,
      (_err, rows, fields) => {
        return res.json(rows);
      }
    );
  } catch (err) {
    console.log(err.message);
  }
});
// ------------------Admin sesearch by Time--------------------//
app.post("/Admin-searchByTime", async (req, res) => {
  const { searchTime } = req.body;
  console.log(searchTime);
  try {
    db.query(
      "SELECT * FROM reservation WHERE resDate=? ",
      searchTime,
      (_err, rows, fields) => {
        return res.json(rows);
      }
    );
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/Admin-cancel", async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    db.query("DELETE FROM reservation WHERE orderID=?", id, (_err, rows, fields) => {
      return res.json("deleted");
    });
  } catch (err) {
    console.log(err.message);
  }
});

//---------------------------RESERVATION-START---------------------------------------//

app.get("/GetReservedTables", (req, res) => {
  const resDate = req.query.resDate;
  const resTime = req.query.resTime;
  db.query(
    "SELECT `table` FROM `reservation` WHERE (`resTime` = ? && `resDate` = ?)",
    [resTime, resDate],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
        console.log(result, resDate, resTime);
      }
    }
  );
});

app.post("/MakeReservation", (req, res) => {
  const userID = req.body.userID;
  const fullName = req.body.fullName;
  const contactNumber = req.body.contactNumber;
  const emailAddress = req.body.emailAddress;
  const numGuests = req.body.numGuests;
  const resDate = req.body.resDate;
  const resTime = req.body.resTime;
  const table = req.body.table;
  const sqlinsert =
    "INSERT INTO `reservation` (`userID`, `fullName`, `contactNumber`, `emailAddress`, `numGuests`, `resDate`, `resTime`, `table`) VALUES (?,?,?,?,?,?,?,?)";
  console.log(
    userID,
    fullName,
    contactNumber,
    emailAddress,
    numGuests,
    resDate,
    resTime,
    table
  );

  db.query(
    sqlinsert,
    [
      userID,
      fullName,
      contactNumber,
      emailAddress,
      numGuests,
      resDate,
      resTime,
      table,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
        
        return res.json("Values inserted");
      }
    }
  )
  
})

app.post('/MakeCreditCardReservation', (req,res) => {
  const userID = req.body.userID
  const fullName = req.body.fullName
  const contactNumber = req.body.contactNumber
  const emailAddress = req.body.emailAddress
  const numGuests = req.body.numGuests
  const resDate = req.body.resDate
  const resTime = req.body.resTime
  const table = req.body.table
  const creditCardNum = req.body.creditCardNum
  const expDate = req.body.expDate
  const billZipCode = req.body.billZipCode
  const sqlinsert = "INSERT INTO `reservation` (`userID`, `fullName`, `contactNumber`, `emailAddress`, `numGuests`, `resDate`, `resTime`, `table`, `creditCardNum`, `expDate`, `billZipCode`) VALUES (?,?,?,?,?,?,?,?,?,?,?)"
  console.log(userID, fullName, contactNumber,emailAddress, numGuests, resDate, resTime, table, creditCardNum, expDate, billZipCode)

  db.query(sqlinsert, 
    [userID, fullName, contactNumber, emailAddress, numGuests,resDate, resTime, table, creditCardNum, expDate, billZipCode], 
    (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log("success")
      
      return res.json("Values inserted")
    }
  })
  
})








//---------------------------RESERVATION-END---------------------------------------//
app.get("/Profile-info/:id", async (req, res) => {
  try {
    let id = req.params.id;
    db.query(
      "SELECT address, name, email, points FROM users WHERE userIDs = ?",
      id,
      (err, rows, fields) => {
        console.log(rows[0]);
        return res.json(rows[0]);
      }
    );
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/Profile-redeem", async (req,res) => {
  try {
    
    let id = req.body.id;
    let code = req.body.code;
    console.log(code);
    let substring = "tasty";
    if (code.includes(substring)) {
      db.query(
        "UPDATE users SET points = points + 1 WHERE userIDs = ?",
        id,
        (err, rows, fields) => {
          return res.json("Redeemed");
        }
        );
    } else {
      return res.json("invalid code");
    }
    
  } catch (err) {
    console.log(err.message);
  }
})
// app.get("/Profile/:id", async (req, res) => {
//   try {
//     let id = req.params.id;
//     db.query(
//       "SELECT points FROM users WHERE userIDs = ?",
//       id,
//       (err, rows, fields) => {
//         return res.json(rows[0]);
//       }
//     );
//   } catch (err) {
//     console.log(err.message);
//   }
// });

app.post("/Profile-edit", async (req, res) => {
  try {
    const { name } = req.body;
    const { email } = req.body;
    const { id } = req.body;
    const { address } = req.body;
    db.query("SELECT * FROM users WHERE email = ?",
    [email],
    (_err, rows, fields) => {
      console.log(rows.length);
      if (rows.length !== 0 && rows[0].email !== email) {
        res.json("Existed Email");
      } else if(rows.length === 0 || (rows.length !== 0 && rows[0].email === email)){ 
        db.query("UPDATE users SET name=?, email=?, address=? WHERE userIDs=?", [
          name,
          email,
          address,
          id,
        ]);
        console.log("1");
        res.json("updated");
    
      }})  
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

