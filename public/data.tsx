import Link from "next/link";
import React, { useRef, useState } from "react";
import { BsThreeDotsVertical, BsCheck2 } from "react-icons/bs";
import { CgArrowTopRightR } from "react-icons/cg";
import { usePopper } from "react-popper";
import Dropdown from "../components/Dropdown";
import { StatusPill } from "../components/Table";
import { useDeleteFiscalYearMutation } from "../slices/fiscalYear";


export const entitiesColumn = [
  {
    Header: "CODE",
    accessor: "code",
    Cell: ({ row }) => {
      return (
        <Link href={`/LegalEntities/details/${row.original.code}`}>
          <a>{row.original.code}</a>
        </Link>
      );
    },
  },
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "LOCATION",
    accessor: "location",
  },
  {
    Header: "WEBSITE",
    accessor: "website",
  },
  {
    Header: "STATUS",
    accessor: "status",
    Cell: StatusPill,
  },
  {
    Header: "Actions",
    accessor: "id",
    Cell: ({ row }) => {
      const refElement = useRef();

      const popElement = useRef();

      const [showFilter, setShowFilter] = useState(false);

      let { styles, attributes } = usePopper(
        refElement.current,
        popElement.current,
        { placement: "left-end" }
      );

      const [deleteFiscalYear, { isLoading, isSuccess, isError }] =
        useDeleteFiscalYearMutation();

      const deleteRecord = async () => {
        //await deleteFiscalYear(row.original.id)
        alert(row.original.title);
      };

      const actions = [
        { text: "Edit", action: deleteRecord },
        { text: "Delete", action: deleteRecord },
      ];

      const DropDown = React.memo(() => (
        <Dropdown items={actions} toggle={() => setShowFilter(false)} />
      ));

      return (
        <div>
          <button
            ref={refElement}
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            <BsThreeDotsVertical />
          </button>
          <div
            ref={popElement}
            className="z-[999] absolute"
            style={styles.popper}
            {...attributes.popper}
          >
            {showFilter && <DropDown />}
          </div>
        </div>
      );
    },
  },
];

export const entityTypeColumn = [
  {
    Header: "LEGAL ENTITY TYPE",
    accessor: "legalEntityType",
    // Cell: ({ row }) => {
    //   return (
    //     <Link href={`/LegalEntities/details/${row.original.code}`}>
    //       <a>{row.original.code}</a>
    //     </Link>
    //   );
    // },
  },
  {
    Header: "DESCRIPTION",
    accessor: "description",
  },
  {
    Header: "START DATE",
    accessor: "startDate",
  },
  {
    Header: "END DATE",
    accessor: "endDate",
  },
  {
    Header: "Actions",
    accessor: "id",
    Cell: ({ row }) => {
      const refElement = useRef();

      const popElement = useRef();

      const [showFilter, setShowFilter] = useState(false);

      let { styles, attributes } = usePopper(
        refElement.current,
        popElement.current,
        { placement: "left-end" }
      );

      const [deleteFiscalYear, { isLoading, isSuccess, isError }] =
        useDeleteFiscalYearMutation();

      const deleteRecord = async () => {
        //await deleteFiscalYear(row.original.id)
        alert(row.original.title);
      };

      const actions = [
        { text: "Edit", action: deleteRecord },
        { text: "Delete", action: deleteRecord },
      ];

      const DropDown = React.memo(() => (
        <Dropdown items={actions} toggle={() => setShowFilter(false)} />
      ));

      return (
        <div>
          <button
            ref={refElement}
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            <BsThreeDotsVertical />
          </button>
          <div
            ref={popElement}
            className="z-[999] absolute"
            style={styles.popper}
            {...attributes.popper}
          >
            {showFilter && <DropDown />}
          </div>
        </div>
      );
    },
  },
];

export const contractColumn = [
  {
    Header: "CONTRACTS",
    accessor: "Contracts",
    Cell: ({ row }) => {
      return (
        <Link href={`/Contracts/details/${row.original.Contracts}`}>
          <a>{row.original.Contracts}</a>
        </Link>
      );
    },
  },
  {
    Header: "CONTRACT ID",
    accessor: "Contract_id",
  },
  {
    Header: "ASSOCIATION NAME",
    accessor: "Association_name",
  },
  {
    Header: "VENDOR NAME",
    accessor: "Vendor_name",
  },
  {
    Header: "SIGNED ON",
    accessor: "Signed_on",
  },
  {
    Header: "AMOUNT",
    accessor: "Amount",
  },
  {
    Header: "START DATE",
    accessor: "Start_date",
  },
  {
    Header: "END DATE",
    accessor: "End_date",
  },
  {
    Header: "ADDED BY",
    accessor: "Added_by",
  },
  {
    Header: "WORK ORDER",
    accessor: "Work_order",
  },
  {
    Header: "STATUS",
    accessor: "Status",
    Cell: StatusPill,
  },
  {
    Header: "Actions",
    accessor: "id",
    Cell: ({ row }) => {
      const refElement = useRef();

      const popElement = useRef();

      const [showFilter, setShowFilter] = useState(false);

      let { styles, attributes } = usePopper(
        refElement.current,
        popElement.current,
        { placement: "left-end" }
      );

      const [deleteFiscalYear, { isLoading, isSuccess, isError }] =
        useDeleteFiscalYearMutation();

      const deleteRecord = async () => {
        //await deleteFiscalYear(row.original.id)
        alert(row.original.title);
      };

      const actions = [
        { text: "Create work order", action: deleteRecord },
        { text: "Renew contract", action: deleteRecord },
        { text: "Terminate contract", action: deleteRecord },
      ];

      const DropDown = React.memo(() => (
        <Dropdown items={actions} toggle={() => setShowFilter(false)} />
      ));

      return (
        <div>
          <button
            ref={refElement}
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            <BsThreeDotsVertical />
          </button>
          <div
            ref={popElement}
            className="z-[999] absolute width-[100px]"
            style={styles.popper}
            {...attributes.popper}
          >
            {showFilter && <DropDown />}
          </div>
        </div>
      );
    },
  },
];


