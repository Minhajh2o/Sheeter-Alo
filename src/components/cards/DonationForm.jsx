import { useState } from "react";
import toast from "react-hot-toast";
import FrostButton from "../shared-components/FrostButton";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    quantity: "",
    itemType: "",
    pickupLocation: "",
    notes: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Thank you! We will reach your destination soon");
    setFormData({ quantity: "", itemType: "", pickupLocation: "", notes: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-sky-100/10 bg-slate-950/40 p-8">
      <h2 className="text-2xl font-bold">Donate clothing</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col space-y-2">
          <label className="text-slate-200 text-sm font-medium">Quantity of items</label>
          <input
            type="number"
            className="input input-bordered w-full bg-slate-900/70"
            value={formData.quantity}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                quantity: event.target.value,
              }))
            }
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-slate-200 text-sm font-medium">Item type</label>
          <input
            type="text"
            className="input input-bordered w-full bg-slate-900/70"
            value={formData.itemType}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                itemType: event.target.value,
              }))
            }
            required
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-slate-200 text-sm font-medium">Pickup location</label>
        <input
          type="text"
          className="input input-bordered w-full bg-slate-900/70"
          value={formData.pickupLocation}
          onChange={(event) =>
            setFormData((prev) => ({
              ...prev,
              pickupLocation: event.target.value,
            }))
          }
          placeholder="House 12, Road 5, Dhanmondi, Dhaka"
          required
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-slate-200 text-sm font-medium">Additional notes</label>
        <textarea
          rows={4}
          className="textarea textarea-bordered w-full bg-slate-900/70"
          value={formData.notes}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, notes: event.target.value }))
          }
        />
      </div>

      <div>
        <FrostButton type="submit" className="w-full md:w-auto">
          Submit donation
        </FrostButton>
      </div>
    </form>
  );
};

export default DonationForm;
