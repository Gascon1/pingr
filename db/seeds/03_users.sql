-- -- Users table seeds here (Example)
INSERT INTO users (first_name, last_name, phone, email, password, business_id)
VALUES ('John', 'Doe','3065307801', 'johndoe@botabota.com', crypt('password', gen_salt('bf')), 2),
  ('Jane', 'Doe','3065307801', 'janedoe@spa.com', crypt('password', gen_salt('bf')), 3);


