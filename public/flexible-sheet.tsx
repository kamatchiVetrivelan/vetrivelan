"use client";
import Image from "next/image";
import { toast } from "sonner"
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
import Link from "next/link";
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

type ButtonType = "Home" | "gradient" | "Navbar" | "Touch" | "Hamburger";

interface FlexibleSheetDemoProps {
  buttonType: ButtonType;
}

const FormSchema = z.object({
  FirstName: z.string().min(2, {
    message: "First name is required.",
  }),
  LastName: z.string().min(1, {
    message: "Last name is required.",
  }),
  BusinessEmail: z.string().email({
    message: "Please enter a valid business email address.",
  }),
  Company: z.string().min(1, {
    message: "Company name is required.",
  }),
  Position: z.string().min(1, {
    message: "Position is required.",
  }),
  PhoneNumber: z.string()
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
});

type FormValues = z.infer<typeof FormSchema>;

export function FlexibleSheetDemo({ buttonType }: FlexibleSheetDemoProps) {
  const form = useForm<FormValues>({
    defaultValues: {
      FirstName: "",
      LastName: "",
      BusinessEmail: "",
      Company: "",
      Position: "",
      PhoneNumber: "",
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
        toast(" Your message has been sent.",{
          description:"we will contact you soon"
            });
        form.reset();
      } else {
        throw new Error(result.error);
      }
    }  
    finally {
      setLoading(false);
    }
  }

  const renderButton = () => {
    switch (buttonType) {
      case "Home":
        return <div className="">Get started </div>;
      case "Navbar":
        return (
          <Link
            href="#"
            className="bg-[#29abe2] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition hidden md:block"
          >
            Get Started
          </Link>
        );
      case "Touch":
        
        return (
            <div>✈️</div>
            // <Image
            //   src="./ArrowRight.svg"
            //   alt=""
            //   width={40}
            //   height={40}
            //   objectFit=""
            //   className="w-20 h-20 "
            //   quality={100}
            // />
        );
      case "Hamburger":
        return (
          <Button className="w-full text-white bg-[#29abe2] py-6 font-semibold text-xl">
            Get Started
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{renderButton()}</SheetTrigger>
      <SheetContent className="w-full max-w-md mx-auto bg-white ">
        <SheetHeader className="mb-10 flex mt-8 ">
          <SheetTitle className="text-2xl font-bold text-gray-700 text-left ">
            <h1 className="-mt-10 mb-8 mx-2">Schedule a Call</h1>
          </SheetTitle>
          <SheetDescription>
            <div className="text-center">
              <h2 className="text-blue-950 font-bold text-4xl mb-4">
                Connect with our Security Team
              </h2>
              <p className="text-gray-600 text-sm font-base">
                Add your details to schedule a call with us
              </p>
            </div>
          </SheetDescription>
        </SheetHeader>

        <div className="px-4 sm:px-6 lg:px-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-8"
            >
              <div className="flex justify-between gap-2 lg:gap-6 ">
                <FormField
                  control={form.control}
                  name="FirstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FloatingLabelInput
                          {...field}
                          id="FirstName"
                          label="First Name"
                          className="text-gray-700 focus:border-blue-500 p-6"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="LastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FloatingLabelInput
                          {...field}
                          id="LastName"
                          label="Last Name"
                          className="text-gray-700 focus:border-blue-500 p-6"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="BusinessEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <FloatingLabelInput
                        {...field}
                        id="BusinessEmail"
                        label="Business Email"
                        className="text-gray-700 focus:border-blue-500 p-6"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs mt-1" />
                  </FormItem>
                )}
              />

              <div className="flex justify-between gap-2 lg:gap-6 ">
                <div>
                  <FormField
                    control={form.control}
                    name="Company"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <FloatingLabelInput
                            {...field}
                            id="Company"
                            label="Company"
                            className="text-gray-700 focus:border-blue-500 p-6 w-full"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <FormField
                    control={form.control}
                    name="Position"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <FloatingLabelInput
                            {...field}
                            id="Position"
                            label="Position"
                            className="text-gray-700 focus:border-blue-500 p-6 w-full"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
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
              <LoadingButton
                type="submit"
                loading={loading}
                className="w-full bg-black hover:bg-blue-700 text-white py-6 text-lg items-center text-center font-semibold rounded-lg transition-colors duration-300" >
                Get Connected
              </LoadingButton>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
}

