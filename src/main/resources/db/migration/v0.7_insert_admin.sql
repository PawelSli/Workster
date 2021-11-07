insert into users(name, password, created_at)values ('Admin_P', 'Admin_P_Password', CURRENT_TIMESTAMP);
insert into roles(name)values ('admin');
insert into users_roles(id_user, id_role)values (1,1);
