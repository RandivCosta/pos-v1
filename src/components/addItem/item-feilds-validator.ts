import { z } from "zod";

export const ItemFeildValidator = z.object({
    code: z.string(),
    extra_code: z.string().optional(),
    bar_code: z.string().optional(),
    name: z.string().min(5),
    category: z.string(),
    subcategory: z.string().optional(),
    brand: z.string(),
    retail_price: z.string(),
    sw_price: z.string().optional(),
    lw_price: z.string().optional(),
    cost: z.string(),
    markup: z.string().optional(),
    current_stock: z.string().optional(),
    stock_limit: z.string().optional(),
    unit: z.string(),
    net_weight: z.string().optional(),
    gross_weight: z.string().optional(),
    location: z.string().optional(),
});

export type TItemFeilds = z.infer<typeof ItemFeildValidator>;
