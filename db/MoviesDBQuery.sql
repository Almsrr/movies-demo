CREATE DATABASE movies

CREATE TABLE movie (
	id serial PRIMARY KEY,
	title varchar(100) NOT NULL,
	genre varchar(50) NOT NULL,
	releaseDate date NOT NULL,
	actors varchar(500) NOT NULL,
	imageUrl varchar(200) NOT NULL,
	synopsis varchar(500),
	language varchar(50)
)

CREATE TABLE actor (
	id serial PRIMARY KEY,
	fullName varchar(100) NOT NULL,
	gender char(1) NOT NULL,
	birthday date NOT NULL,
	movies varchar(200) NOT NULL,
	photoUrl varchar(500)
)

CREATE TABLE MovieActor (
	movie integer REFERENCES movie(id),
	actor integer REFERENCES actor(id)
)

INSERT INTO movie (title, genre, releaseDate, actors, imageUrl, synopsis, language) VALUES ('Spider-Man: Far from Home', 'action', '2019-06-28', 'Tom Holland, Zendaya', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExSKCIV-7phwcX9R-yfDSGoA8cFPbYjlH419RF6CHj6LITdrX', 'The amazing Spiderman is back with his friend Zendaya <3', 'English');



