import { useMemo, useState } from "react";
import CampaignCard from "../components/cards/CampaignCard";
import SectionHeading from "../components/shared-components/SectionHeading";
import winterCampaigns from "../data/campaign.json";

const Campaigns = () => {
  const [divisionFilter, setDivisionFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const divisions = useMemo(
    () => [
      "all",
      ...new Set(winterCampaigns.map((campaign) => campaign.division)),
    ],
    []
  );
  const statuses = useMemo(
    () => [
      "all",
      ...new Set(winterCampaigns.map((campaign) => campaign.status)),
    ],
    []
  );

  const filteredCampaigns = winterCampaigns.filter((campaign) => {
    const matchesDivision =
      divisionFilter === "all" || campaign.division === divisionFilter;
    const matchesStatus =
      statusFilter === "all" || campaign.status === statusFilter;
    return matchesDivision && matchesStatus;
  });

  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Campaign directory"
        title="Browse every winter mission"
        subtitle="Triage by division or urgency, then tap inside to pledge your bundle."
      />

      {/* Filters */}
      <div className="grid gap-4 rounded-3xl border border-white/5 bg-white/5 p-6 md:grid-cols-2">
        {/* Division Filter */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 w-full">
          <span className="text-slate-200 text-sm font-medium shrink-0">
            Filter by division
          </span>
          <select
            className="select select-bordered bg-slate-900/90 w-full"
            value={divisionFilter}
            onChange={(event) => setDivisionFilter(event.target.value)}
          >
            {divisions.map((division) => (
              <option key={division} value={division}>
                {division === "all" ? "All divisions" : division}
              </option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 w-full">
          <span className="text-slate-200 text-sm font-medium shrink-0">
            Filter by status
          </span>
          <select
            className="select select-bordered bg-slate-900/90 w-full"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status === "all" ? "All statuses" : status}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredCampaigns.length ? (
        <div className="grid gap-6 md:grid-cols-3">
          {filteredCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      ) : (
        <p className="rounded-3xl border border-white/10 bg-slate-900/40 p-6 text-center text-slate-200">
          No campaigns match those filters right now — try another division or
          status.
        </p>
      )}
    </div>
  );
};

export default Campaigns;
