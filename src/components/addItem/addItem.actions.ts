"use server"

import { TItemFeilds } from "./item-feilds-validator";

export async function createItem(data: TItemFeilds) {
    try {
        console.log(data)

        return { message: "Item successfully created!" }
    } catch (e) {
        throw new Error('Failed to create item')
    }
}