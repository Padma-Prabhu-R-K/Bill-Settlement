
// <!DOCTYPE html>
// <head>
// <title>Project</title>
// </head>
// <body>
// <script>

Expenditure = [
    Bill1 = {
      paid_A: 1000,
      paid_B: 2000,
      paid_C: 1000
    },
    Bill2 = {
      paid_A: 300,
      paid_B: 400,
      paid_C: 100,
      paid_D: 200
    },
    Bill3 = {
      paid_A: 3000,
      paid_B: 100,
      // paid_C: 150,
      paid_D: 200
    }
  ]
  console.log('Expenditure:', Expenditure)
  // ----------------------------------------------------------------------------------------------------------------------------
  // To find total of every Bill
  function total(Obj) {
    sumn = 0
    count = 0
    for (a in Obj) {
      sumn += Obj[a]
      count++
    }
    return sumn
  }
  
  // To find average of Every Bill
  function averagePerPerson(Obj) {
    total(Obj)
    avg = sumn / count
    return avg
  }
  
  console.log(" ----------------------------------------------------------------------------------------------------------- ")
  
  settlement = {}
  persontoget = {}
  persontopay = {}
  // ----------------------------------------------------------------------------------------------------------------------------
  
  //Paid amount of the user in each bill
  const paidbyUser = (Obj) => {
    averagePerPerson(Obj) 	                            // Average Function
    s = {}
    for (i in Obj) {
      s[i] = Obj[i] - avg
    }
    return s
  }
  
  //--------------------------------------------------------------------------------------------------------------------------
  
  // Paid by each Bill
  for (j in Expenditure) {
    Expenditure[j] = paidbyUser(Expenditure[j])
  }
  console.log("Due (or) to be Paid in Each Bill: ", Expenditure)
  console.log("----------------------------------------------------------------------------------------------------------------------------")
  
  //  settlement={}			//Settlement Object
  for (k in Expenditure) {
    for (l in Expenditure[k]) {
      if (l in settlement) {
        settlement[l] = settlement[l] + Expenditure[k][l]
      }
      else {
        settlement[l] = Expenditure[k][l]
      }
    }
  }
  console.log('settlement:', settlement);
  
  // -----------------------------------------------------------------------------------------------------------------------------
  
  for (m in settlement) {
    if (settlement[m] == 0) {
      console.log(m + " No Need to pay")
    }
    else if (settlement[m] < 0) {
      persontopay[m] = settlement[m]
    }
    else if (settlement[m] > 0) {
      persontoget[m] = settlement[m]
    }
  }
  console.log('Persontopay:', persontopay)
  console.log('Persontoget:', persontoget)
  
  
  console.log(" ----------------------------------------------------------------------------------------------------------- ")
  
  //Sorting in ascending order
  const sort_asc = (Obj) => {
    arr3 = []
    asc = {}
    for (j in Obj) {
      arr3.push(Obj[j])
    }
    function srt(a, b) {                      // Sort function
      return a - b
    }
    arr3.sort(srt)
  
    for (k of arr3) {
      for (l in Obj) {
        if (k == Obj[l]) {
          asc[l] = Obj[l]
        }
      }
    }
    return asc
  }
  
  // Sorting in descending order
  const sort_des = (Obj) => {
    arr4 = []
    des = {}
    for (m in Obj) {
      arr4.push(Obj[m])
    }
  
    function srt1(a, b) {
      return a - b
    }
    arr4.sort(srt1)
    arr4.reverse()
  
    for (n of arr4) {
      for (o in Obj) {
        if (n == Obj[o]) {
          des[o] = Obj[o]
        }
      }
    }
    return des
  }
  
  sorted_persontopay = sort_asc(persontopay)
  sorted_persontoget = sort_des(persontoget)
  console.log('sorted_persontopay: ', sorted_persontopay)
  console.log('sorted_persontoget: ', sorted_persontoget)
  
  // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  // Remove Zero function
  function removezero(Obj) {
    e = {}
    for (p in Obj) {
      if (Obj[p] != 0) {
        e[p] = Obj[p]
      }
    }
    return e
  }
  
  
  // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //Final Settlements
  
  for (p in sorted_persontopay) {
    for (r in sorted_persontoget) {
      if (sorted_persontoget[r] > Math.abs(sorted_persontopay[p])) {
        console.log(`${p} has to pay Rs.${Math.abs(sorted_persontopay[p]).toFixed(2)} to ${r}`)
        sorted_persontoget[r] = (sorted_persontoget[r]) - (Math.abs(sorted_persontopay[p]))
        sorted_persontopay[p] = 0
        sorted_persontopay = removezero(sorted_persontopay)
      }
      else if (sorted_persontoget[r] < Math.abs(sorted_persontopay[p])) {
        console.log(`${p} has to pay Rs.${Math.abs(sorted_persontoget[r]).toFixed(2)} to ${r}`)
        sorted_persontopay[p] = (sorted_persontoget[r]) - Math.abs(sorted_persontopay[p])
        sorted_persontoget[r] = 0
        sorted_persontoget = removezero(sorted_persontoget)
        sorted_persontopay = removezero(sorted_persontopay)
      }
      else if (sorted_persontoget[r] == Math.abs(sorted_persontopay[p])) {
        console.log(`${p} has to pay Rs.${Math.abs(sorted_persontopay[p]).toFixed(2)} to ${r}`)
        sorted_persontoget[r] = 0
        sorted_persontopay[p] = 0
        sorted_persontoget = removezero(sorted_persontoget)
        sorted_persontopay = removezero(sorted_persontopay)
      }
  
    }
  }
  // </script>
  // </body>
  // </html>