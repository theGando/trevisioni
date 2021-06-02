CREATE TABLE [Artists] (
	Id nvarchar(255) NOT NULL,
	UserId nvarchar(255) NOT NULL,
	Genre integer NOT NULL,
	Subgenre nvarchar(255),
	PhoneNumber nvarchar(16) NOT NULL,
	Email nvarchar(40) NOT NULL,
	Bio nvarchar(500) NULL,
  CONSTRAINT [PK_ARTISTS] PRIMARY KEY CLUSTERED
  (
  [Id] ASC
  )

)
GO
CREATE TABLE [Users] (
	Id nvarchar(255) NOT NULL,
	Name nvarchar(40) NOT NULL,
	Type integer NOT NULL,
     CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED
  (
  [Id] ASC
  )
)
GO

CREATE TABLE [Files] (
	Id nvarchar(255) NOT NULL,
	Path nvarchar(500) NOT NULL,
	UserId nvarchar(255) NOT NULL,
  CONSTRAINT [PK_FILES] PRIMARY KEY CLUSTERED
  (
  [Id] ASC
  ) 

)
GO
CREATE TABLE [Events] (
	Id nvarchar(255) NOT NULL,
	ArtistId nvarchar(255),
	StartTime datetime NOT NULL,
	EndTime datetime NOT NULL,
	ActivityName nvarchar(255) NOT NULL,
  CONSTRAINT [PK_EVENTS] PRIMARY KEY CLUSTERED
  (
  [Id] ASC
  )

)
GO
CREATE TABLE [StaticArts] (
	id nvarchar(255) NOT NULL,
	ArtistId nvarchar(255) NOT NULL,
	Position integer NOT NULL,
  CONSTRAINT [PK_STATICARTS] PRIMARY KEY CLUSTERED
  (
  [id] ASC
  ) 

)
GO
CREATE TABLE [StaffAvailability] (
	Id nvarchar(255) NOT NULL,
	UserId nvarchar(255) NOT NULL,
	StartTime datetime NOT NULL,
	EndTime datetime NOT NULL,
  CONSTRAINT [PK_STAFFAVAILABILITY] PRIMARY KEY CLUSTERED
  (
  [Id] ASC
  )

)
GO
CREATE TABLE [StaffRoles] (
	Id nvarchar(255) NOT NULL,
	UserId nvarchar(255) NOT NULL,
	Role integer NOT NULL,
	StartTime datetime NOT NULL,
	EndTime datetime NOT NULL,
  CONSTRAINT [PK_STAFFROLES] PRIMARY KEY CLUSTERED
  (
  [Id] ASC
  )

)
GO
ALTER TABLE [Artists] WITH CHECK ADD CONSTRAINT [FK_Artists_User_Id] FOREIGN KEY ([UserId]) REFERENCES [Users]([Id])
ON UPDATE CASCADE
GO
ALTER TABLE [Artists] CHECK CONSTRAINT [FK_Artists_User_Id]
GO

ALTER TABLE [Files] WITH CHECK ADD CONSTRAINT [FK_Files_Users_Id] FOREIGN KEY ([UserId]) REFERENCES [Users]([Id])
ON UPDATE CASCADE
GO
ALTER TABLE [Files] CHECK CONSTRAINT [FK_Files_Users_Id]
GO

ALTER TABLE [Events] WITH CHECK ADD CONSTRAINT [FK_Events_Artists_Id] FOREIGN KEY ([ArtistId]) REFERENCES [Artists]([Id])
ON UPDATE CASCADE
GO
ALTER TABLE [Events] CHECK CONSTRAINT [FK_Events_Artists_Id]
GO

ALTER TABLE [StaticArts] WITH CHECK ADD CONSTRAINT [FK_StaticArts_Artists_Id] FOREIGN KEY ([ArtistId]) REFERENCES [Artists]([Id])
ON UPDATE CASCADE
GO
ALTER TABLE [StaticArts] CHECK CONSTRAINT [FK_StaticArts_Artists_Id]
GO

ALTER TABLE [StaffAvailability] WITH CHECK ADD CONSTRAINT [FK_StaffAvailability_Users_Id] FOREIGN KEY ([UserId]) REFERENCES [Users]([Id])
ON UPDATE CASCADE
GO
ALTER TABLE [StaffAvailability] CHECK CONSTRAINT [FK_StaffAvailability_Users_Id]
GO

ALTER TABLE [StaffRoles] WITH CHECK ADD CONSTRAINT [FK_StaffRoles_Users_Id] FOREIGN KEY ([UserId]) REFERENCES [Users]([Id])
ON UPDATE CASCADE
GO
ALTER TABLE [StaffRoles] CHECK CONSTRAINT [FK_StaffRoles_Users_Id]
GO
