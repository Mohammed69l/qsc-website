import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";

export function useContactForm() {
  const { toast } = useToast();
  
  return useSubmitContact({
    mutation: {
      onSuccess: () => {
        toast({
          title: "Request Submitted",
          description: "Our team will contact you shortly to confirm your booking.",
        });
      },
      onError: () => {
        toast({
          title: "Submission Failed",
          description: "There was an error submitting your request. Please try again or call us.",
          variant: "destructive",
        });
      }
    }
  });
}
