// Function Name is "megaFriend"

function megaFriend(friends) {
    var largeName = "";     // initial value of largeName
    for (var i = 0; i < friends.length; i++) {
      if (largeName.length < friends[i].length) {
        largeName = friends[i];
      }
    }
    return largeName;
  }

  // Function is called from here with parameters (friends Name)

  console.log(megaFriend(['Rumana Akter Rumi','Adrita', 'Shima', 'Ruma','Anjali','Akhlima Akter Akhi']));
