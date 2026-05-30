import { Injectable } from '@nestjs/common';

@Injectable()
export class FilterFunctionsService {
  locationFilterFunction(
    id: number | null,
    dataForFilter: any[],
    parentids: string | null,
    noofrecords: number,
    pageNo: number,
    name: string | null
  ): any[] {
    if (parentids && parentids.trim() !== "") {
      const parentIdsArray = parentids.split(",").map((id) => parseInt(id.trim())); // Convert to array of integers
      const dataSorting = dataForFilter?.filter((res) =>
        parentIdsArray?.includes(res.CityID)
      );
      const sortedData = dataSorting.sort((a, b) =>
        a.OrganizationName?.localeCompare(b.OrganizationName)
      );
      if (noofrecords === 0) {
        return sortedData; // Return all data if noofrecords is 0
      }
      const paginatedData = sortedData.slice(
        (pageNo - 1) * noofrecords,
        pageNo * noofrecords
      );
      return paginatedData;
    }
    if (name && name.length > 2) {
      const filteredData = dataForFilter.filter((res) =>
        res?.OrganizationName?.toLowerCase()?.includes(name?.toLowerCase())
      );
      const sortedData = filteredData.sort((a, b) =>
        a.OrganizationName?.localeCompare(b.OrganizationName)
      );

      if (noofrecords === 0) {
        return sortedData; // Return all data if noofrecords is 0
      }
      const paginatedData = sortedData.slice(
        (pageNo - 1) * noofrecords,
        pageNo * noofrecords
      );
      return paginatedData;
    }
    // Check for id filter
    if (id !== null) {
      const filteredDataById = dataForFilter.filter(
        (res) => res.StateID == id
      );
      const sortedDataById = filteredDataById.sort((a, b) =>
        a.OrganizationName.localeCompare(b.OrganizationName)
      );

      if (noofrecords === 0) {
        return sortedDataById; // Return all data if noofrecords is 0
      }
      const paginatedDataById = sortedDataById.slice(
        (pageNo - 1) * noofrecords,
        pageNo * noofrecords
      );
      return paginatedDataById;
    }
    const sortedData = dataForFilter.sort((a, b) =>
      a.OrganizationName.localeCompare(b.OrganizationName)
    );
    if (noofrecords === 0) {
      return sortedData; // Return all data if noofrecords is 0
    }
    const paginatedData = sortedData.slice(
      (pageNo - 1) * noofrecords,
      pageNo * noofrecords
    );
    return paginatedData;
  }

  OrganizationFilterFunction(
    id: number | null,
    dataForFilter: any[],
    parentids: string | null,
    noofrecords: number,
    pageNo: number,
    name: string | null
  ): any[] {
    if (parentids && parentids.trim() !== "") {
      const parentIdsArray = parentids.split(",").map((id) => parseInt(id.trim())); // Convert to array of integers
      const dataSorting = dataForFilter.filter((res) =>
        parentIdsArray.includes(res.OrganizationId)
      );
      const sortedData = dataSorting.sort((a, b) =>
        a.OrganizationName?.localeCompare(b.OrganizationName)
      );
      if (noofrecords === 0) {
        return sortedData; // Return all data if noofrecords is 0
      }
      const paginatedData = sortedData.slice(
        (pageNo - 1) * noofrecords,
        pageNo * noofrecords
      );
      return paginatedData;
    }
    if (name && name.length > 2) {
      const filteredData = dataForFilter.filter((res) =>
        res?.OrganizationName?.toLowerCase()?.includes(name?.toLowerCase())
      );
      const sortedData = filteredData.sort((a, b) =>
        a.OrganizationName?.localeCompare(b.OrganizationName)
      );

      if (noofrecords === 0) {
        return sortedData; // Return all data if noofrecords is 0
      }
      const paginatedData = sortedData.slice(
        (pageNo - 1) * noofrecords,
        pageNo * noofrecords
      );
      return paginatedData;
    }
    // Check for id filter
    if (id !== null) {
      const filteredDataById = dataForFilter.filter(
        (res) => res.OrganizationId == id
      );
      const sortedDataById = filteredDataById.sort((a, b) =>
        a.OrganizationName.localeCompare(b.OrganizationName)
      );

      if (noofrecords === 0) {
        return sortedDataById; // Return all data if noofrecords is 0
      }
      const paginatedDataById = sortedDataById.slice(
        (pageNo - 1) * noofrecords,
        pageNo * noofrecords
      );
      return paginatedDataById;
    }
    const sortedData = dataForFilter.sort((a, b) =>
      a.OrganizationName.localeCompare(b.OrganizationName)
    );
    if (noofrecords === 0) {
      return sortedData; // Return all data if noofrecords is 0
    }
    const paginatedData = sortedData.slice(
      (pageNo - 1) * noofrecords,
      pageNo * noofrecords
    );
    return paginatedData;
  }


  UnitMasterFilterFunction(
    id: number | null,
    dataForFilter: any[],
    parentids: string | null,
    noofrecords: number,
    pageNo: number,
    name: string | null
  ): any[] {
    if (parentids && parentids?.trim() !== "") {
      const parentIdsArray = parentids?.split(",").map((id) => parseInt(id.trim())); // Convert to array of integers
      const dataSorting = dataForFilter?.filter((res) =>
        parentIdsArray?.includes(parseInt(res.UnitMasterid))
      );
      const sortedData = dataSorting.sort((a, b) =>
        a.OrganizationName?.localeCompare(b.OrganizationName)
      );
      if (noofrecords === 0) {
        return sortedData; // Return all data if noofrecords is 0
      }
      const paginatedData = sortedData.slice(
        (pageNo - 1) * noofrecords,
        pageNo * noofrecords
      );
      return paginatedData;
    }
    if (name && name.length > 0) {
      const filteredData = dataForFilter.filter((res) =>
        res?.UnitName?.toLowerCase()?.includes(name?.toLowerCase())
      );
      const sortedData = filteredData.sort((a, b) =>
        a.UnitName?.localeCompare(b.UnitName)
      );

      if (noofrecords === 0) {
        return sortedData; // Return all data if noofrecords is 0
      }
      const paginatedData = sortedData.slice(
        (pageNo - 1) * noofrecords,
        pageNo * noofrecords
      );
      return paginatedData;
    }
    // Check for id filter
    if (id !== null) {
      const filteredDataById = dataForFilter.filter(
        (res) => res.UnitMasterid == id
      );
      const sortedDataById = filteredDataById.sort((a, b) =>
        a.UnitName.localeCompare(b.UnitName)
      );

      if (noofrecords === 0) {
        return sortedDataById; // Return all data if noofrecords is 0
      }
      const paginatedDataById = sortedDataById.slice(
        (pageNo - 1) * noofrecords,
        pageNo * noofrecords
      );
      return paginatedDataById;
    }
    const sortedData = dataForFilter.sort((a, b) =>
      a.UnitName.localeCompare(b.UnitName)
    );
    if (noofrecords === 0) {
      return sortedData; // Return all data if noofrecords is 0
    }
    const paginatedData = sortedData.slice(
      (pageNo - 1) * noofrecords,
      pageNo * noofrecords
    );
    return paginatedData;
  }
}
