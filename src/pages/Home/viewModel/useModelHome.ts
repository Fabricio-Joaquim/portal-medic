import { toast } from "react-toastify";
import { useLoading } from "../../../hooks/useLoading";
import { MedicationsResponse } from "../../../interface/medicationsInterface";
import { MedicationService } from "../../../service/medicationService";
import { useEffect, useState } from "react";

const useModelHome = () => {
  const [medications, setMedications] = useState<MedicationsResponse>({} as MedicationsResponse);
  const { setLoadingAction } = useLoading( )

  const getMedications = async (page?: number, limit?: number, search?: string) => {
    setLoadingAction(true);
    MedicationService.getMedications({ page, limit, search }).then((response) => {
      setMedications(response);
    })
    .catch((error) => toast.error(error.message))
    .finally(() => setLoadingAction(false));
  };

  const columns = [
    {
      header: 'Product Number',
      accessorKey: 'product_number',
    },
    {
      header: 'Form',
      accessorKey: 'form',
    },
    {
      header: 'Strength',
      accessorKey: 'strength',
    },
    {
      header: 'Reference Drug',
      accessorKey: 'reference_drug',
    },
    {
      header: 'Drug Name',
      accessorKey: 'drug_name',
    },
    {
      header: 'Active Ingredient',
      accessorKey: 'active_ingredient',
    },
  ];

  const handlerPageLimit = (page: number, limit: number) => {
    getMedications(page, limit);
  }

  const handlerSearch = (search: string) => {
    getMedications(undefined, undefined, search)
  }

  useEffect(() => {
    getMedications();
  }, []);

  return {
    medications,
    getMedications,
    columns, handlerPageLimit,
    handlerSearch
  };
}

export { useModelHome }