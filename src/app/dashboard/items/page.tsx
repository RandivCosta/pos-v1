"use client"
import AddItem from "@/components/addItem/AddItem";
import Items from "@/components/items/Items";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MoveLeft, Undo2 } from "lucide-react";
import { useState } from "react";

export default function Page() {

    const [editInter, setEditInter] = useState(false)

    const addProductBtnClicked = () => {
        setEditInter(true)
    }

    const backBtnClicked = () => {
        setEditInter(false)
    }

    return (
        <>
            {!editInter &&
                <div className="flex flex-col w-full">
                    <div className="overflow-hidden">
                        <Card className="m-3">
                            <CardHeader>
                                <CardTitle>Products</CardTitle>
                                <CardDescription>All registered products of your shop</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between">
                                    <div className="">
                                        <Input type="email" placeholder="Search" />
                                    </div>

                                    <div>
                                        <Button onClick={addProductBtnClicked}>Add product</Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="overflow-auto">
                        <Items />
                    </div>
                </div>
            }
            {editInter &&
                <div className="m-3 w-full">
                    <div className="mb-3 flex items-center w-full justify-start overflow-hidden">
                        <Button variant="ghost" onClick={backBtnClicked}><Undo2 /></Button>
                        <h1 className="text-xl font-bold ml-3">Add new product</h1>
                    </div>

                    <div className="w-full">
                        <AddItem />
                    </div>
                </div>
            }
        </>
    );
}