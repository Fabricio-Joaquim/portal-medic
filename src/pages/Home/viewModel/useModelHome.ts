import { MedicationsResponse, requestMedications } from "../../../interface/medicationsInterface";
import { MedicationService } from "../../../service/medicationService";
import { useLoading } from "../../../hooks/useLoading";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useModelHome = () => {
  const [medications, setMedications] = useState<MedicationsResponse>({} as MedicationsResponse);
  const { setLoadingAction } = useLoading()

  const getMedications = async (objectRequest: requestMedications) => {
    setLoadingAction(true);
    MedicationService.getMedications(objectRequest).then((response) => {
      setMedications(response);
    })
      .catch((error) => toast.error(error.message))
      .finally(() => setLoadingAction(false));
  };

  const columns = [
    {
      header: 'Drug Name',
      accessorKey: 'drug_name',
    },
    {
      header: 'Form',
      accessorKey: 'form',
    },
    {
      header: 'Active Ingredient',
      accessorKey: 'active_ingredient',
    },
    {
      header: 'Product Number',
      accessorKey: 'product_number',
    },
    {
      header: 'Strength',
      accessorKey: 'strength',
    },
    {
      header: 'Reference Drug',
      accessorKey: 'reference_drug',
    },
  ];

  const handlerSearch = (paramSearch: requestMedications) => {
    getMedications({ ...paramSearch, limit: paramSearch.limit, search: paramSearch.search })
  }

  useEffect(() => {
    getMedications({});
  }, []);

  return {
    medications,
    getMedications,
    columns,
    handlerSearch
  };
}

export { useModelHome }