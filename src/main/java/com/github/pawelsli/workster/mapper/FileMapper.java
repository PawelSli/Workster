package com.github.pawelsli.workster.mapper;

import com.github.pawelsli.workster.domain.FileImpl;
import com.github.pawelsli.workster.entities.File;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface FileMapper {

    @Mapping(target = "fileId",source = "id")
    FileImpl fileToFileImpl(File file);

    @Mapping(target = "id",source = "fileId")
    File fileImplToFile(FileImpl fileImpl);
}
