  --SELECT LEFT(Email, CHARINDEX('@',Email)) + 'company' + RIGHT(Email, LEN(Email) - CHARINDEX('.',Email, CHARINDEX('@',Email)) + 1) 
  UPDATE E SET Email = LEFT(Email, CHARINDEX('@',Email)) + 'company' + RIGHT(Email, LEN(Email) - CHARINDEX('.',Email, CHARINDEX('@',Email)) + 1) 
	FROM [dbo].[Employee] E