package com.github.pawelsli.workster.mapper;

import com.github.pawelsli.workster.domain.UserImpl;
import com.github.pawelsli.workster.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mappings({
            @Mapping(target = "userId", source = "id"),
            @Mapping(target = "username", source = "name")

    })
    UserImpl userToUserImpl(User user);

    @Mappings({
            @Mapping(target = "id", source = "userId"),
            @Mapping(target = "name", source = "username")
    })
    User userImplToUser(UserImpl userImpl);
}
