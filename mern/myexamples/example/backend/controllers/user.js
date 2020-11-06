module.exports.getUsers = (req, res) => {
  res.json(

    {
      "users": [
        {
          "objectID": "u1",
          "name": "Adriano Oliveira",
          "email": "adriano.qwe32@gmail.com"
        },
        {
          "objectID": "u2",
          "name": "Jully Whatsom",
          "email": "jully.wht@yahoo.com"
        }
      ]
    } 

  )
}
