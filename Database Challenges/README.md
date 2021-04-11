ERD


![ERD](https://github.com/RCT-Development/NebulaChallenge/blob/main/Database%20Challenges/Database_ERD.png?raw=true)





      UPDATE E SET Email = LEFT(Email, CHARINDEX('@',Email)) + 'company' + RIGHT(Email, LEN(Email) - CHARINDEX('.',Email, CHARINDEX('@',Email)) + 1) 
      FROM [dbo].[Employee] E
