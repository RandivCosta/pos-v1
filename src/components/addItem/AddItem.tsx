"use client"

import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { ItemFeildValidator, TItemFeilds } from "./item-feilds-validator"
import { cn } from "@/lib/utils"
import { CirclePlus } from "lucide-react"
import { createItem } from "./addItem.actions"

const AddItem = () => {

  const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<TItemFeilds>({ resolver: zodResolver(ItemFeildValidator) })

  const onSubmit: SubmitHandler<TItemFeilds> = async (data) => {
    try {
      console.log(data)
      const res = await createItem(data)
      console.log(res.message)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid justify-stretch grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">

            <div>
              <Input {...register("code")} className={cn({ "focus-visible:ring-red-500": errors.code })} type="text" placeholder="Code" required />
              {errors.code && (<p className="text-sm text-red-500">{errors.code.message}</p>)}
            </div>

            <div>
              <Input {...register("extra_code")} className={cn({ "focus-visible:ring-red-500": errors.extra_code })} type="text" placeholder="Extra Code" />
            </div>

            <div>
              <Input {...register("bar_code")} className={cn({ "focus-visible:ring-red-500": errors.bar_code })} type="text" placeholder="Bar Code" />
            </div>

            <div>
              <Input {...register("markup")} className={cn({ "focus-visible:ring-red-500": errors.markup })} type="text" placeholder="Markup" />
            </div>

            <div className="col-span-2">
              <Input {...register("name")} className={cn({ "focus-visible:ring-red-500": errors.name })} type="text" placeholder="Name" required />
              {errors.name && (<p className="text-sm text-red-500">{errors.name.message}</p>)}
            </div>

            <div className="place-self-center flex items-center md:space-x-2">
              <Label htmlFor="category" className="text-wrap text-xs md:text-sm">Category : </Label>

              <select {...register("category")} name="category" className="p-1 border border-slate-500 rounded" required>
                <option value="rice">rice</option>
                <option value="milk">milk</option>
                <option value="other">other</option>
              </select>

              <Button size="icon" className="h-6 w-6" type="button">
                <CirclePlus className="h-4 w-4" />
              </Button>
            </div>

            <div className="place-self-center flex items-center md:space-x-2">
              <Label htmlFor="subcategory" className="text-wrap text-xs md:text-sm">Subcategory :</Label>

              <select {...register("subcategory")} name="subcategory" className="p-1 border border-slate-500 rounded" required>
                <option value="white">white</option>
                <option value="red">red</option>
                <option value="other">other</option>
              </select>

              <Button size="icon" className="h-6 w-6" type="button">
                <CirclePlus className="h-4 w-4" />
              </Button>
            </div>

            <div className="place-self-center flex items-center md:space-x-2">
              <Label htmlFor="brand" className="text-wrap text-xs md:text-sm">Brand : </Label>

              <select {...register("brand")} name="brand" className="p-1 border border-slate-500 rounded" required>
                <option value="keels">keels</option>
                <option value="uniliver">uniliver</option>
                <option value="other">other</option>
              </select>

              <Button size="icon" className="h-6 w-6" type="button">
                <CirclePlus className="h-4 w-4" />
              </Button>
            </div>

            <div>
              <Input {...register("net_weight")} className={cn({ "focus-visible:ring-red-500": errors.code })} type="net_weight" placeholder="Net weight" />
            </div>

            <div>
              <Input {...register("gross_weight")} className={cn({ "focus-visible:ring-red-500": errors.code })} type="gross_weight" placeholder="Gross weight" />
            </div>

            <div>
              <Input {...register("location")} className={cn({ "focus-visible:ring-red-500": errors.code })} type="location" placeholder="Location" />
            </div>

            <div>
              <Input {...register("cost")} className={cn({ "focus-visible:ring-red-500": errors.cost })} type="text" placeholder="Cost" required />
              {errors.cost && (<p className="text-sm text-red-500">{errors.cost.message}</p>)}
            </div>

            <div className="place-self-center flex items-center md:space-x-2">
              <Label htmlFor="unit" className="text-wrap text-xs md:text-sm">Unit : </Label>

              <select {...register("unit")} name="unit" className="p-1 border border-slate-500 rounded" required>
                <option value="kg">kg</option>
                <option value="litre">litre</option>
                <option value="other">other</option>
              </select>

              <Button size="icon" className="h-6 w-6" type="button">
                <CirclePlus className="h-4 w-4" />
              </Button>
            </div>

            <div className="col-span-2 md:col-span-3 lg:col-span-1 border-spacing-2 border border-slate-500 rounded p-3">
              <Badge>REATAIL PRICE</Badge>
              <div>
                <Label htmlFor="retail_price">Sales Price</Label>
              </div>

              <Input {...register("retail_price")} className={cn({ "focus-visible:ring-red-500": errors.retail_price }, "my-2")} type="text" placeholder="Sales Price" />

              <div className="flex items-center space-x-2 justify-end">
                <Checkbox id="automatic_retail" />
                <Label htmlFor="automatic_retail_price">automatic</Label>
              </div>
            </div>

            <div className="col-span-2 md:col-span-3 lg:col-span-1 border-spacing-2 border border-slate-500 rounded p-3">
              <Badge>SMALL WHOLESALE PRICE</Badge>
              <div>
                <Label htmlFor="sw_price">Sales Price</Label>
              </div>

              <Input {...register("sw_price")} className={cn({ "focus-visible:ring-red-500": errors.sw_price }, "my-2")} type="text" placeholder="Sales Price" />

              <div className="flex items-center space-x-2 justify-end">
                <Checkbox id="automatic_sw" />
                <Label htmlFor="automatic_sw_price">automatic</Label>
              </div>
            </div>

            <div className="col-span-2 md:col-span-3 lg:col-span-1 border-spacing-2 border border-slate-500 rounded p-3">
              <Badge>LARGE WHOLESALE PRICE</Badge>
              <div>
                <Label htmlFor="lw_price">Sales Price</Label>
              </div>

              <Input {...register("lw_price")} className={cn({ "focus-visible:ring-red-500": errors.lw_price }, "my-2")} type="text" placeholder="Sales Price" />

              <div className="flex items-center space-x-2 justify-end">
                <Checkbox id="automatic_lw" />
                <Label htmlFor="automatic_lw_price">automatic</Label>
              </div>
            </div>

            <div className="col-span-2 md:col-span-3 lg:col-span-3 border-spacing-2 border border-slate-500 rounded p-3">
              <div className="flex items-center justify-around space-x-3 lg:space-x-6">

                <div className="flex items-center space-x-2">
                  <Switch id="control_stock" />
                  <Label htmlFor="control_stock">Control Stock</Label>
                </div>

                <Input {...register("current_stock")} className={cn({ "focus-visible:ring-red-500": errors.current_stock })} type="text" placeholder="Current stock" />

                <Input {...register("stock_limit")} className={cn({ "focus-visible:ring-red-500": errors.stock_limit })} type="text" placeholder="Stock limit" />

              </div>
            </div>
          </div>

          <div className="flex justify-end mt-5">
            <Button type="submit" disabled={isSubmitting}>Submit</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddItem