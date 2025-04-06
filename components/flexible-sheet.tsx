"use client";
// import Image from "next/image";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import * as React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { LoadingButton } from "@/components/ui/LoadingButton";
 import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sendEmail } from "@/app/Form/action";
import { Textarea } from "./ui/textarea";

type ButtonType = "Home" | "Tour" | "Navbar" | "Services" | "Hamburger";

interface FlexibleSheetDemoProps {
  buttonType: ButtonType;
}

const FormSchema = z.object({
  Name: z.string().min(1, {
    message: "Name is required.",
  }),
  PhoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15, { message: "Phone number must not exceed 15 digits." })
    .refine(
      (value) =>
        /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/.test(
          value
        ),
      {
        message: "Please enter a valid phone number.",
      }
    ),
  comment: z.string().optional(),
});

type FormValues = z.infer<typeof FormSchema>;

export function FlexibleSheetDemo({ buttonType }: FlexibleSheetDemoProps) {
  const form = useForm<FormValues>({
    defaultValues: {
      Name: "",
      PhoneNumber: "",
      comment: "",
    },
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
  });

  const [loading, setLoading] = React.useState(false);

  async function onSubmit(data: FormValues) {
    setLoading(true);
    try {
      const result = await sendEmail(data);
      if (result.success) {
        toast(" Your message has been sent.", {
          description: "we will contact you soon",
        });
        form.reset();
      } else {
        throw new Error(result.error);
      }
    } finally {
      setLoading(false);
    }
  }

  const renderButton = () => {
    switch (buttonType) {
      case "Home":
        return <div className="">Get started </div>;
      case "Navbar":
        return (
          <Button
            className="text-white bg-primary hover:opacity-90 cursor-pointer"
            aria-label="Contact us "
          >
            Contact Us
          </Button>
        );

      case "Hamburger":
        return (
          <Button className="w-full text-white bg-primary hover:bg-primary/30  py-6 font-semibold text-xl">
            Contact us
          </Button>
        );
      case "Services":
        return (
          <Button
            variant="secondary"
            className="border border-purple-600 text-purple-600 hover:bg-purple-50 hover:cursor-pointer"
          >
            Contact us
          </Button>
        );
      case "Tour":
        return (
          <Button
            variant="secondary"
            className="border border-primary hover:border-2 hover:cursor-pointer"
          >
            {" "}
            Book Now
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{renderButton()}</SheetTrigger>
      <SheetContent className="w-full max-w-md mx-auto bg-white">
        <SheetHeader className="mb flex mt-8 ">
          <SheetTitle className="text-2xl font-bold text-gray-700 text-left ">
            <h2 className="text-blue-950 font-bold text-4xl mb-4">
              Interested in Our Tours and Travel Packages?
            </h2>{" "}
          </SheetTitle>
          <SheetDescription>
            <p className="text-gray-600 text-sm font-base">
              Let us help you choose the perfect travel experience! Share your
              details, and we&apos;ll get in touch with more information.
            </p>
          </SheetDescription>
        </SheetHeader>

        <div className="px-4 sm:px-6 lg:px-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-8"
            >
              <FormField
                control={form.control}
                name="Name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <FloatingLabelInput
                        {...field}
                        id="Name"
                        label=" Name"
                        className="text-gray-700 focus:border-blue-500 p-6"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs mt-1" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="PhoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <FloatingLabelInput
                        {...field}
                        id="PhoneNumber"
                        label="Phone Number"
                        className="text-gray-700 focus:border-blue-500 p-6"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs mt-1" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="add message "
                        style={{ minHeight: "20px", maxHeight: "100px" }}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs mt-1" />
                  </FormItem>
                )}
              />
              <LoadingButton
                type="submit"
                loading={loading}
                className="w-full bg-primary hover:bg-primary/40 text-white py-6 text-lg items-center text-center font-semibold rounded-lg transition-colors duration-300"
              >
                Get Connected
              </LoadingButton>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
