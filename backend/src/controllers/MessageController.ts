import express, { Request, Response } from "express";
import Message from "../models/MessageModel";

export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await Message.find();

    res.status(200).json({
      success: true,
      message: `Fecheed ${messages.length} Messages`,
      data: messages,
    });
  } catch (err) {
    res.status(404).json({ succss: false, message: err });
  }
};

export const addMessage = async (req: Request, res: Response) => {
  const post = req.body;
  let newMessage;
  try {
    newMessage = new Message(post);
    newMessage = await newMessage.save();
    res.status(201).json({
      success: true,
      message: "New message created succesffully",
      data: newMessage,
    });
  } catch (err) {
    res.status(409).json({
      success: false,
      message: err,
    });
  }
};
