function passchecker() {
  let passwordInput = document.getElementById("password_input");

  passwordInput.addEventListener("input", function () {
    let values = [];

    // one uppercase letter
    let oulArray = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    for (let oulindex = 0; oulindex < passwordInput.value.length; oulindex++) {
      for (let moulindex = 0; moulindex < oulArray.length; moulindex++) {
        if (passwordInput.value.charAt(oulindex) == oulArray[moulindex]) {
          values.push("istrueoul");
        }
      }
    }

    // one lowercase letter
    let ollArray = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    for (let ollindex = 0; ollindex < passwordInput.value.length; ollindex++) {
      for (let mollindex = 0; mollindex < ollArray.length; mollindex++) {
        if (passwordInput.value.charAt(ollindex) == ollArray[mollindex]) {
          values.push("istrueoll");
        }
      }
    }

    // one symbol
    let osArray = ["@", "#", "$", "%", "&", "*", "!", "?", "+", "-", "^", "~"];

    for (let osindex = 0; osindex < passwordInput.value.length; osindex++) {
      for (let mosindex = 0; mosindex < osArray.length; mosindex++) {
        if (passwordInput.value.charAt(osindex) == osArray[mosindex]) {
          values.push("istrueos");
        }
      }
    }

    // number
    let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    for (let numindex = 0; numindex < passwordInput.value.length; numindex++) {
      for (let mnumindex = 0; mnumindex < numArray.length; mnumindex++) {
        if (passwordInput.value.charAt(numindex) == numArray[mnumindex]) {
          values.push("istruenum");
        }
      }
    }

    // minimum 6 characters
    if (passwordInput.value.length >= 6) {
      values.push("istruemorethan6");
    }

    let passStrength = [];

    for (let i = 0; i < values.length; i++) {
      let currentValue = values[i];

      if (
        currentValue === "istrueoul" ||
        currentValue === "istrueoll" ||
        currentValue === "istrueos" ||
        currentValue === "istruenum" ||
        currentValue === "istruemorethan6"
      ) {
        if (passStrength.indexOf(currentValue) === -1) {
          passStrength.push(currentValue);
        }
      }
    }

    // password is too weak
    if (passwordInput.value.length == 0) {
      document.getElementById("password_status").innerText =
        "Enter Your Paasword";
      document.getElementById("password_status").style.color = "#fff";
      document.getElementById("password_input").style.borderColor = "#0f202760";
    }
    // password is too weak
    if (passStrength.length == 1 || passStrength.length == 2) {
      document.getElementById("password_status").innerText =
        "Very Weak Password";
      document.getElementById("password_status").style.color = "#ff0404";
      document.getElementById("password_input").style.borderColor = "#ff0404";
    }
    // password is medium
    if (passStrength.length == 3) {
      document.getElementById("password_status").innerText = "Medium Password";
      document.getElementById("password_status").style.color = "#ffc404";
      document.getElementById("password_input").style.borderColor = "#ffc404";
    }
    // password is strong
    if (passStrength.length == 4) {
      document.getElementById("password_status").innerText = "Strong Password";
      document.getElementById("password_status").style.color = "#7a1cff";
      document.getElementById("password_input").style.borderColor = "#7a1cff";
    }
    // password is very strong
    if (passStrength.length == 5) {
      document.getElementById("password_status").innerText =
        "Very Strong Password";
      document.getElementById("password_status").style.color = "#7eff22";
      document.getElementById("password_input").style.borderColor = "#7eff22";
    }

    if (passStrength.indexOf("istrueoul") !== -1) {
      document.getElementById("fullstatus1").innerText =
        "Password Have Capital letter";
      document.getElementById("fullstatus1").style.color = "#6eb800";
      document.getElementById("fullstatus1_right").style.display = "flex";
      document.getElementById("fullstatus1_wrong").style.display = "none";
    }
    if (passStrength.indexOf("istrueoul") === -1) {
      document.getElementById("fullstatus1").innerText =
        "Password does not contain capital letter";
      document.getElementById("fullstatus1").style.color = "red";
      document.getElementById("fullstatus1_right").style.display = "none";
      document.getElementById("fullstatus1_wrong").style.display = "flex";
    }
    if (passStrength.indexOf("istrueoll") !== -1) {
      document.getElementById("fullstatus2").innerText =
        "Password Have Small letter";
      document.getElementById("fullstatus2").style.color = "#6eb800";
      document.getElementById("fullstatus2_right").style.display = "flex";
      document.getElementById("fullstatus2_wrong").style.display = "none";
    }
    if (passStrength.indexOf("istrueoll") === -1) {
      document.getElementById("fullstatus2").innerText =
        "Password does not contain lowercase letters";
      document.getElementById("fullstatus2").style.color = "red";
      document.getElementById("fullstatus2_right").style.display = "none";
      document.getElementById("fullstatus2_wrong").style.display = "flex";
    }
    if (passStrength.indexOf("istruenum") !== -1) {
      document.getElementById("fullstatus3").innerText = "Password Have Number";
      document.getElementById("fullstatus3").style.color = "#6eb800";
      document.getElementById("fullstatus3_right").style.display = "flex";
      document.getElementById("fullstatus3_wrong").style.display = "none";
    }
    if (passStrength.indexOf("istruenum") === -1) {
      document.getElementById("fullstatus3").innerText =
        "Password does not contain numbers.";
      document.getElementById("fullstatus3").style.color = "red";
      document.getElementById("fullstatus3_right").style.display = "none";
      document.getElementById("fullstatus3_wrong").style.display = "flex";
    }
    if (passStrength.indexOf("istrueos") !== -1) {
      document.getElementById("fullstatus4").innerText = "Password Have Symbol";
      document.getElementById("fullstatus4").style.color = "#6eb800";
      document.getElementById("fullstatus4_right").style.display = "flex";
      document.getElementById("fullstatus4_wrong").style.display = "none";
    }
    if (passStrength.indexOf("istrueos") === -1) {
      document.getElementById("fullstatus4").innerText =
        "Password does not contain Symbol";
      document.getElementById("fullstatus4").style.color = "red";
      document.getElementById("fullstatus4_right").style.display = "none";
      document.getElementById("fullstatus4_wrong").style.display = "flex";
    }
    if (passStrength.indexOf("istruemorethan6") !== -1) {
      document.getElementById("fullstatus5").innerText =
        "Password Have Minimum 6 Characters";
      document.getElementById("fullstatus5").style.color = "#6eb800";
      document.getElementById("fullstatus5_right").style.display = "flex";
      document.getElementById("fullstatus5_wrong").style.display = "none";
    }
    if (passStrength.indexOf("istruemorethan6") === -1) {
      document.getElementById("fullstatus5").innerText =
        "Password does not have minimum 6 characters";
      document.getElementById("fullstatus5").style.color = "red";
      document.getElementById("fullstatus5_right").style.display = "none";
      document.getElementById("fullstatus5_wrong").style.display = "flex";
    }
  });
}

passchecker();

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

function checkfullstaus() {
  let passwordInput = document.getElementById("password_input");

  let values = [];

  // one uppercase letter
  let oulArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  for (let oulindex = 0; oulindex < passwordInput.value.length; oulindex++) {
    for (let moulindex = 0; moulindex < oulArray.length; moulindex++) {
      if (passwordInput.value.charAt(oulindex) == oulArray[moulindex]) {
        values.push("istrueoul");
      }
    }
  }

  // one lowercase letter
  let ollArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  for (let ollindex = 0; ollindex < passwordInput.value.length; ollindex++) {
    for (let mollindex = 0; mollindex < ollArray.length; mollindex++) {
      if (passwordInput.value.charAt(ollindex) == ollArray[mollindex]) {
        values.push("istrueoll");
      }
    }
  }

  // one symbol
  let osArray = ["@", "#", "$", "%", "&", "*", "!", "?", "+", "-", "^", "~"];

  for (let osindex = 0; osindex < passwordInput.value.length; osindex++) {
    for (let mosindex = 0; mosindex < osArray.length; mosindex++) {
      if (passwordInput.value.charAt(osindex) == osArray[mosindex]) {
        values.push("istrueos");
      }
    }
  }

  // number
  let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  for (let numindex = 0; numindex < passwordInput.value.length; numindex++) {
    for (let mnumindex = 0; mnumindex < numArray.length; mnumindex++) {
      if (passwordInput.value.charAt(numindex) == numArray[mnumindex]) {
        values.push("istruenum");
      }
    }
  }

  // minimum 6 characters
  if (passwordInput.value.length >= 6) {
    values.push("istruemorethan6");
  }

  let passStrength = [];

  for (let i = 0; i < values.length; i++) {
    let currentValue = values[i];

    if (
      currentValue === "istrueoul" ||
      currentValue === "istrueoll" ||
      currentValue === "istrueos" ||
      currentValue === "istruenum" ||
      currentValue === "istruemorethan6"
    ) {
      if (passStrength.indexOf(currentValue) === -1) {
        passStrength.push(currentValue);
      }
    }
  }

  for (let ind = 0; ind < values.length; ind++) {
    let currentValue = values[ind];
    if (
      currentValue !== "istrueoul" ||
      currentValue !== "istrueoll" ||
      currentValue !== "istrueos" ||
      currentValue !== "istruenum" ||
      currentValue !== "istruemorethan6"
    ) {
      document.getElementById("generate_pass").style.display = "block";
    }
  }

  document.getElementById("form").style.height = "400px";

  setTimeout(() => {
    document.getElementById("fullcheck").style.display = "block";

    if (passStrength.indexOf("istrueoul") !== -1) {
      document.getElementById("fullstatus1").innerText =
        "Password Have Capital letter";
      document.getElementById("fullstatus1").style.color = "#6eb800";
      document.getElementById("fullstatus1_right").style.display = "flex";
      document.getElementById("fullstatus1_wrong").style.display = "none";
    }
    if (passStrength.indexOf("istrueoul") === -1) {
      document.getElementById("fullstatus1").innerText =
        "Password does not contain capital letter";
      document.getElementById("fullstatus1").style.color = "red";
      document.getElementById("fullstatus1_right").style.display = "none";
      document.getElementById("fullstatus1_wrong").style.display = "flex";
    }
    if (passStrength.indexOf("istrueoll") !== -1) {
      document.getElementById("fullstatus2").innerText =
        "Password Have Small letter";
      document.getElementById("fullstatus2").style.color = "#6eb800";
      document.getElementById("fullstatus2_right").style.display = "flex";
      document.getElementById("fullstatus2_wrong").style.display = "none";
    }
    if (passStrength.indexOf("istrueoll") === -1) {
      document.getElementById("fullstatus2").innerText =
        "Password does not contain lowercase letters";
      document.getElementById("fullstatus2").style.color = "red";
      document.getElementById("fullstatus2_right").style.display = "none";
      document.getElementById("fullstatus2_wrong").style.display = "flex";
    }
    if (passStrength.indexOf("istruenum") !== -1) {
      document.getElementById("fullstatus3").innerText = "Password Have Number";
      document.getElementById("fullstatus3").style.color = "#6eb800";
      document.getElementById("fullstatus3_right").style.display = "flex";
      document.getElementById("fullstatus3_wrong").style.display = "none";
    }
    if (passStrength.indexOf("istruenum") === -1) {
      document.getElementById("fullstatus3").innerText = "Password does not contain numbers.";
      document.getElementById("fullstatus3").style.color = "red";
      document.getElementById("fullstatus3_right").style.display = "none";
      document.getElementById("fullstatus3_wrong").style.display = "flex";
    }
    if (passStrength.indexOf("istrueos") !== -1) {
      document.getElementById("fullstatus4").innerText = "Password Have Symbol";
      document.getElementById("fullstatus4").style.color = "#6eb800";
      document.getElementById("fullstatus4_right").style.display = "flex";
      document.getElementById("fullstatus4_wrong").style.display = "none";
    }
    if (passStrength.indexOf("istrueos") === -1) {
      document.getElementById("fullstatus4").innerText =
        "Password does not contain Symbol";
      document.getElementById("fullstatus4").style.color = "red";
      document.getElementById("fullstatus4_right").style.display = "none";
      document.getElementById("fullstatus4_wrong").style.display = "flex";
    }
    if (passStrength.indexOf("istruemorethan6") !== -1) {
      document.getElementById("fullstatus5").innerText =
        "Password Have Minimum 6 Characters";
      document.getElementById("fullstatus5").style.color = "#6eb800";
      document.getElementById("fullstatus5_right").style.display = "flex";
      document.getElementById("fullstatus5_wrong").style.display = "none";
    }
    if (passStrength.indexOf("istruemorethan6") === -1) {
      document.getElementById("fullstatus5").innerText =
        "Password does not have minimum 6 characters";
      document.getElementById("fullstatus5").style.color = "red";
      document.getElementById("fullstatus5_right").style.display = "none";
      document.getElementById("fullstatus5_wrong").style.display = "flex";
    }
  }, 800);
}

function generate_pass() {
  let genarray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "@",
    "#",
    "$",
    "%",
    "&",
    "*",
    "!",
    "?",
    "+",
    "-",
    "^",
    "~",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
  ];
  document.getElementById("new_pass").style.display = "block";
  document.getElementById("new_paas_and_alert").style.display = "flex";

  let oulArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // one lowercase letter
  let ollArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // one symbol
  let osArray = ["@", "#", "$", "%", "&", "*", "!", "?", "+", "-", "^", "~"];

  // number
  let numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  // checknewpasshaveallvalues == cnphav

  let newPass = "";
  let newPasstem = "";
  for (let cnphav = 0; cnphav < 16; cnphav++) {
    let oulArraycheck;
    let ollArraycheck;
    let osArraycheck;
    let numArraycheck;
    for (let si = 0; si <= 8; si++) {
      if (oulArray.indexOf(newPasstem[si]) !== -1) {
        oulArraycheck = true;
      }
    }
    for (let si = 0; si <= 8; si++) {
      if (ollArray.indexOf(newPasstem[si]) !== -1) {
        ollArraycheck = true;
      }
    }
    for (let si = 0; si <= 8; si++) {
      if (osArray.indexOf(newPasstem[si]) !== -1) {
        osArraycheck = true;
      }
    }
    for (let sgi = 0; sgi <= 8; sgi++) {
      if (numArray.indexOf(newPasstem[sgi]) !== -1) {
        numArraycheck = true;
      }
    }

    if (
      oulArraycheck === true &&
      ollArraycheck === true &&
      osArraycheck === true &&
      numArraycheck === true &&
      newPasstem.length >= 6
    ) {
      newPass = newPasstem;
      break;
    } else {
      newPasstem = "";
      for (let genindex = 0; genindex <= 8; genindex++) {
        newPasstem += genarray[Math.floor(Math.random() * 74)];
      }
    }
  }
  document.getElementById("password_input").value = newPass;
  document.getElementById("new_pass").innerText = newPass;
  


  let passwordInput = document.getElementById("password_input");

  let values = [];

  for (let oulindex = 0; oulindex < passwordInput.value.length; oulindex++) {
    for (let moulindex = 0; moulindex < oulArray.length; moulindex++) {
      if (passwordInput.value.charAt(oulindex) == oulArray[moulindex]) {
        values.push("istrueoul");
      }
    }
  }

  for (let ollindex = 0; ollindex < passwordInput.value.length; ollindex++) {
    for (let mollindex = 0; mollindex < ollArray.length; mollindex++) {
      if (passwordInput.value.charAt(ollindex) == ollArray[mollindex]) {
        values.push("istrueoll");
      }
    }
  }

  for (let osindex = 0; osindex < passwordInput.value.length; osindex++) {
    for (let mosindex = 0; mosindex < osArray.length; mosindex++) {
      if (passwordInput.value.charAt(osindex) == osArray[mosindex]) {
        values.push("istrueos");
      }
    }
  }

  for (let numindex = 0; numindex < passwordInput.value.length; numindex++) {
    for (let mnumindex = 0; mnumindex < numArray.length; mnumindex++) {
      if (passwordInput.value.charAt(numindex) == numArray[mnumindex]) {
        values.push("istruenum");
      }
    }
  }

  // minimum 6 characters
  if (passwordInput.value.length >= 6) {
    values.push("istruemorethan6");
  }

  let passStrength = [];

  for (let i = 0; i < values.length; i++) {
    let currentValue = values[i];

    if (
      currentValue === "istrueoul" ||
      currentValue === "istrueoll" ||
      currentValue === "istrueos" ||
      currentValue === "istruenum" ||
      currentValue === "istruemorethan6"
    ) {
      if (passStrength.indexOf(currentValue) === -1) {
        passStrength.push(currentValue);
      }
    }
  }

  // password is too weak
  if (passwordInput.value.length == 0) {
    document.getElementById("password_status").innerText =
      "Enter Your Paasword";
    document.getElementById("password_status").style.color = "#fff";
    document.getElementById("password_input").style.borderColor = "#0f202760";
  }
  // password is too weak
  if (passStrength.length == 1 || passStrength.length == 2) {
    document.getElementById("password_status").innerText = "Very Weak Password";
    document.getElementById("password_status").style.color = "#ff0404";
    document.getElementById("password_input").style.borderColor = "#ff0404";
  }
  // password is medium
  if (passStrength.length == 3) {
    document.getElementById("password_status").innerText = "Medium Password";
    document.getElementById("password_status").style.color = "#ffc404";
    document.getElementById("password_input").style.borderColor = "#ffc404";
  }
  // password is strong
  if (passStrength.length == 4) {
    document.getElementById("password_status").innerText = "Strong Password";
    document.getElementById("password_status").style.color = "#7a1cff";
    document.getElementById("password_input").style.borderColor = "#7a1cff";
  }
  // password is very strong
  if (passStrength.length == 5) {
    document.getElementById("password_status").innerText =
      "Very Strong Password";
    document.getElementById("password_status").style.color = "#7eff22";
    document.getElementById("password_input").style.borderColor = "#7eff22";
  }

  for (let ind = 0; ind < values.length; ind++) {
    let currentValue = values[ind];
    if (
      currentValue !== "istrueoul" ||
      currentValue !== "istrueoll" ||
      currentValue !== "istrueos" ||
      currentValue !== "istruenum" ||
      currentValue !== "istruemorethan6"
    ) {
      document.getElementById("generate_pass").style.display = "block";
    }
  }

  document.getElementById("form").style.height = "400px";

    document.getElementById("fullcheck").style.display = "block";

    if (passStrength.indexOf("istrueoul") !== -1) {
      document.getElementById("fullstatus1").innerText =
        "Password Have Capital letter";
      document.getElementById("fullstatus1").style.color = "#6eb800";
      document.getElementById("fullstatus1_right").style.display = "flex";
      document.getElementById("fullstatus1_wrong").style.display = "none";
    }
    if (passStrength.indexOf("istrueoul") === -1) {
      document.getElementById("fullstatus1").innerText =
        "Password does not contain capital letter";
      document.getElementById("fullstatus1").style.color = "red";
      document.getElementById("fullstatus1_right").style.display = "none";
      document.getElementById("fullstatus1_wrong").style.display = "flex";
    }
    if (passStrength.indexOf("istrueoll") !== -1) {
      document.getElementById("fullstatus2").innerText =
        "Password Have Small letter";
      document.getElementById("fullstatus2").style.color = "#6eb800";
      document.getElementById("fullstatus2_right").style.display = "flex";
      document.getElementById("fullstatus2_wrong").style.display = "none";
    }
    if (passStrength.indexOf("istrueoll") === -1) {
      document.getElementById("fullstatus2").innerText =
        "Password does not contain lowercase letters";
      document.getElementById("fullstatus2").style.color = "red";
      document.getElementById("fullstatus2_right").style.display = "none";
      document.getElementById("fullstatus2_wrong").style.display = "flex";
    }
    if (passStrength.indexOf("istruenum") !== -1) {
      document.getElementById("fullstatus3").innerText = "Password Have Number";
      document.getElementById("fullstatus3").style.color = "#6eb800";
      document.getElementById("fullstatus3_right").style.display = "flex";
      document.getElementById("fullstatus3_wrong").style.display = "none";
    }
    if (passStrength.indexOf("istruenum") === -1) {
      document.getElementById("fullstatus3").innerText =
        "Password does not contain numbers.";
      document.getElementById("fullstatus3").style.color = "red";
      document.getElementById("fullstatus3_right").style.display = "none";
      document.getElementById("fullstatus3_wrong").style.display = "flex";
    }
    if (passStrength.indexOf("istrueos") !== -1) {
      document.getElementById("fullstatus4").innerText = "Password Have Symbol";
      document.getElementById("fullstatus4").style.color = "#6eb800";
      document.getElementById("fullstatus4_right").style.display = "flex";
      document.getElementById("fullstatus4_wrong").style.display = "none";
    }
    if (passStrength.indexOf("istrueos") === -1) {
      document.getElementById("fullstatus4").innerText =
        "Password does not contain Symbol";
      document.getElementById("fullstatus4").style.color = "red";
      document.getElementById("fullstatus4_right").style.display = "none";
      document.getElementById("fullstatus4_wrong").style.display = "flex";
    }
    if (passStrength.indexOf("istruemorethan6") !== -1) {
      document.getElementById("fullstatus5").innerText =
        "Password Have Minimum 6 Characters";
      document.getElementById("fullstatus5").style.color = "#6eb800";
      document.getElementById("fullstatus5_right").style.display = "flex";
      document.getElementById("fullstatus5_wrong").style.display = "none";
    }
    if (passStrength.indexOf("istruemorethan6") === -1) {
      document.getElementById("fullstatus5").innerText =
        "Password does not have minimum 6 characters";
      document.getElementById("fullstatus5").style.color = "red";
      document.getElementById("fullstatus5_right").style.display = "none";
      document.getElementById("fullstatus5_wrong").style.display = "flex";
    }
}

document.getElementById("new_pass").addEventListener("click", function () {
  let text = document.getElementById("new_pass").innerText;
  let elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);

  let copiedIndicator = document.getElementById("copied_indicator");
  copiedIndicator.style.display = "inline-block";
  copiedIndicator.innerText = "Copied";
  copiedIndicator.style.color = "#99ff00";
  
  setTimeout(() => {
    copiedIndicator.style.display = "none";
  }, 1000);
});


