import BadRequestError from "../errors/bad-request.js";
import prisma from "../client.js";
import { StatusCodes } from "http-status-codes";
import NotFoundError from "../errors/not-found.js";






export const getPublishers = async (req, res, next) => {


    const publishData = await prisma.publisher.findMany({});


    res.status(200).json({
        status: "success",
        publisher: publishData,
    });

    // 3) If everything ok, send token to client

}












export const createPublisher = async (req, res, next) => {
    const { name } = req.body;


    if (!name) {
        throw new BadRequestError("Please provide all the values");
    }

    const publishData = await prisma.publisher.create({
        data: {
            name
        },
    });


    res.status(200).json({
        status: "success",
        publisher: publishData,
    });

    // 3) If everything ok, send token to client

}

export const editPublisher = async (req, res, next) => {
    const recordId = req.params.id;
    const { name } = req.body;


    if (!name) {
        throw new BadRequestError("Please provide all the values");
    }

    const recordToUpdate = await prisma.publisher.findUnique({
        where: {
            id: Number(recordId), // Provide the unique identifier of the record you want to update
        },
    });

     recordToUpdate.name = name;

    const updatedRecord = await prisma.publisher.update({
        where: {
          id: Number(recordId), // Provide the unique identifier of the record you want to update
        },
        data: recordToUpdate,
      })


    res.status(200).json({
        status: "success",
        publisher: updatedRecord,
    });

    // 3) If everything ok, send token to client

}


export const deletePublisherById = async (req, res, next) => {
    const publisherID = req.params.id;


    if (!publisherID) {
        throw new BadRequestError("No id is selected");
    }

    const publisher = await prisma.publisher.delete({
        where: {
            id: Number(publisherID)
        }
    });

    // 3) If everything ok, send token to client
    res.status(200).json({
        status: "success",
        message: "successfully deleted"
    });

};