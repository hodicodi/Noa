import { StatusCodes } from "http-status-codes";
import { DeepPartial, ILike } from "typeorm";
import { HttpError } from "../errors/httpError.ts";
import { Song } from "../song/song.entity.ts";
import { Album } from "./album.entity.ts";
import { Artist } from "../artist/artist.entity.ts";
import { S3File, S3FileDescriptor } from "../s3-service/s3service.types.ts";
import { GENERAL_S3_PATH } from "../song/song.consts.ts";
import s3Service from "../s3-service/s3Service.ts";

const getAllAlbums = () =>
  Album.find({
    relations: {
      songs: true,
      artist: true,
    },
  });

const getAlbumById = async (uuid: string) => {
  const album = await Album.findOne({
    where: { uuid: uuid },
    relations: {
      songs: true,
      artist: true,
    },
  });

  if (!album) {
    throw new HttpError(StatusCodes.NOT_FOUND, "album not found");
  }

  return album;
};

const getAlbumImgByUuid = async (uuid: string) => {
  const album = await Album.findOneBy({ uuid });

  if (!album) {
    throw new HttpError(StatusCodes.NOT_FOUND, "album not found");
  }
  const albumUrl = album.imgUrl;

  const albumImg = await s3Service.getFile(album.imgUrl!);

  return albumImg;
};

const createAlbum = async (album: DeepPartial<Album>) => {
  const imgUrl = GENERAL_S3_PATH + `${album.name}`;
  album.imgUrl = imgUrl;
  return Album.save(album);
};

const getAlbumsWithQuery = async (searchQuery: string) =>
  await Album.find({
    where: [{ name: ILike(`%${searchQuery}%`) }, { artist: { name: ILike(`%${searchQuery}%`) } }],
    relations: {
      artist: true,
    },
  });

const addImgFile = async (file: Express.Multer.File, title: string) => {
  const myDescription: S3FileDescriptor = { name: title, extension: "png", path: GENERAL_S3_PATH, contentType: "audio/mpeg" };

  const myfile: S3File = { name: title, extension: "png", path: GENERAL_S3_PATH, contentType: "image/png", content: file.buffer };

  const saveUrl = await s3Service.initializeCleanerApi(myDescription);

  await s3Service.uploadFile(saveUrl, myfile, myfile.contentType);
};

export default { getAllAlbums, getAlbumById, createAlbum, getAlbumsWithQuery, addImgFile, getAlbumImgByUuid };
