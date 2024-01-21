import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
	res.send("home no controller do meu cu");
};

export const dogs = (req: Request, res: Response) => {};

export const cats = (req: Request, res: Response) => {};

export const fish = (req: Request, res: Response) => {};
