export const myIncomingTaskItems = [
  {
    id: 24894,
    taskId: '5066464',
    processName: 'ФПП/ФСС - 5066410',
    taskName: 'Редактирование черновика карточки ФПП/ФСС',
    startDate: 1718616728340,
    dueDate: 879973200000,
    formKey: 'PpDraft',
    localVariables: {
      equipmentOwnerLogin: null,
      agent: null,
      addReportReasons: null,
      actionFDocTemp: null,
      isPates: null,
      assignFDocTemp: null,
      dueDate: '1997-11-20T00:00:00',
      organizationAddReport: null,
      commentHistory: [
        {
          lastName: 'Админов',
          firstName: 'Админ Админович',
          data: '2024-06-17T09:32:07.877Z',
          action: {
            color: 'green',
            title: 'Создание черновика ',
            type: 'action',
          },
          taskName: 'Создание черновика проекта формуляра руководителем',
        },
      ],
      workerGroupLogin: null,
      orderExecutorLogin: null,
      instructionList: [
        {
          id: '893e9647a09',
          isTableInstruction: true,
          status: {
            id: 63,
            code: 'ASSIGN_NEW',
            status: 'Новый',
            docType: {
              id: 'ASSIGN',
              name: 'Поручение',
              viewLink: '/instructions/view/',
              dbTable: 'assign_f_doc',
            },
            label: 'Новый',
          },
          type: {
            id: 2,
            name: 'Стандартный',
            code: 'STANDARD',
          },
          dueNumber: 11,
          assignee: '1e3e4a12-c505-4b3a-a47d-a61ad8b72720',
          approver: '1e3e4a12-c505-4b3a-a47d-a61ad8b72720',
          body: 'Ознакомиться с результатами согласования ФПП/ФСС, оповестить ответственное за внедрение подразделение',
          initiator: {
            id: '61fa7ea7-0daa-461c-8413-cb96c77cf2d9',
            unsiUserId: null,
            firstName: 'Админ Админович',
            lastName: 'Админов',
            roles: [
              {
                id: 'f05d2f38-7e77-4ed1-ad6b-1a0e79412a79',
                name: 'Ответственный за отправку КП ОЭ',
                code: 'SENDER-KP-OE',
                realmId: 'PABP',
              },
              {
                id: 'b697c922-5a7c-4d72-ab60-2f46f6b55c3a',
                name: 'Ответственный за работу с карточками СНУ',
                code: 'SNU_RESPONSIBLE',
                realmId: 'PABP',
              },
              {
                id: '87a42af9-978f-442a-831c-be431d31ad96',
                name: 'Администратор ПАБП',
                code: 'admin',
                realmId: 'PABP',
              },
              {
                id: '79a280fe-f0a8-4bcc-b64c-71ae1a3d43c0',
                name: 'Базовый пользователь ПАиО',
                code: 'BASE_USER_PAIO',
                realmId: 'PABP',
              },
              {
                id: '3b25b467-a793-4e94-9532-4f6c877140f8',
                name: 'Ответственный за сбор данных',
                code: 'DATA_EXTRACTOR',
                realmId: 'PABP',
              },
              {
                id: '466e18dd-e459-4c76-be32-cbf0845c60c0',
                name: 'Ответственный ОИОЭиРН (анализ СНУ)',
                code: 'SNU_OIOEIRN',
                realmId: 'PABP',
              },
            ],
            subdivision: '128467',
            subdivisionTxt: 'Участок №1',
            groups: [
              {
                id: '5c0d2e87-b013-49c1-ada7-5f449566bb28',
                name: 'BAL',
              },
            ],
            email: 'admin_admin@click-group.ru',
            realmId: 'PABP',
            login: 'admin',
            created: '2023-02-14T12:48:02.629+00:00',
            password: '',
            active: true,
            isUnsi: false,
            position: 'Инженер',
            domain: {
              id: 1,
              loginPrefix: 'co',
              description: 'Ldap Центрального Аппарата',
              alias: 'Центральный аппарат',
              code: 'CO',
              federationLink: '2deebc32-7622-446a-bb0a-f4bcd26178c9',
            },
            label: 'Админов Админ Админович - Инженер - Участок №1',
            updatedDate: '2023-12-19T09:49:49.429+00:00',
          },
          pabpRNpp: {
            id: 11,
            createdBy: null,
            createdDate: '2023-03-02T13:27:25.027+00:00',
            updatedBy: null,
            updatedDate: null,
            shortName: 'ПАТ',
            fullName: 'Плавучая атомная теплоэлектростанция',
            code: 'PAT',
            priznak: 'PATES',
            label: 'Плавучая атомная теплоэлектростанция',
          },
          nonRemovable: true,
        },
        {
          id: '93e9647a095',
          isTableInstruction: true,
          status: {
            id: 63,
            code: 'ASSIGN_NEW',
            status: 'Новый',
            docType: {
              id: 'ASSIGN',
              name: 'Поручение',
              viewLink: '/instructions/view/',
              dbTable: 'assign_f_doc',
            },
            label: 'Новый',
          },
          type: {
            id: 2,
            name: 'Стандартный',
            code: 'STANDARD',
          },
          dueNumber: 11,
          assignee: '33446bd0-f369-46f3-a7f7-f2b892243c9f',
          approver: '33446bd0-f369-46f3-a7f7-f2b892243c9f',
          body: 'Ознакомиться с результатами согласования ФПП/ФСС, оповестить ответственное за внедрение подразделение',
          initiator: {
            id: '61fa7ea7-0daa-461c-8413-cb96c77cf2d9',
            unsiUserId: null,
            firstName: 'Админ Админович',
            lastName: 'Админов',
            roles: [
              {
                id: 'f05d2f38-7e77-4ed1-ad6b-1a0e79412a79',
                name: 'Ответственный за отправку КП ОЭ',
                code: 'SENDER-KP-OE',
                realmId: 'PABP',
              },
              {
                id: 'b697c922-5a7c-4d72-ab60-2f46f6b55c3a',
                name: 'Ответственный за работу с карточками СНУ',
                code: 'SNU_RESPONSIBLE',
                realmId: 'PABP',
              },
              {
                id: '87a42af9-978f-442a-831c-be431d31ad96',
                name: 'Администратор ПАБП',
                code: 'admin',
                realmId: 'PABP',
              },
              {
                id: '79a280fe-f0a8-4bcc-b64c-71ae1a3d43c0',
                name: 'Базовый пользователь ПАиО',
                code: 'BASE_USER_PAIO',
                realmId: 'PABP',
              },
              {
                id: '3b25b467-a793-4e94-9532-4f6c877140f8',
                name: 'Ответственный за сбор данных',
                code: 'DATA_EXTRACTOR',
                realmId: 'PABP',
              },
              {
                id: '466e18dd-e459-4c76-be32-cbf0845c60c0',
                name: 'Ответственный ОИОЭиРН (анализ СНУ)',
                code: 'SNU_OIOEIRN',
                realmId: 'PABP',
              },
            ],
            subdivision: '128467',
            subdivisionTxt: 'Участок №1',
            groups: [
              {
                id: '5c0d2e87-b013-49c1-ada7-5f449566bb28',
                name: 'BAL',
              },
            ],
            email: 'admin_admin@click-group.ru',
            realmId: 'PABP',
            login: 'admin',
            created: '2023-02-14T12:48:02.629+00:00',
            password: '',
            active: true,
            isUnsi: false,
            position: 'Инженер',
            domain: {
              id: 1,
              loginPrefix: 'co',
              description: 'Ldap Центрального Аппарата',
              alias: 'Центральный аппарат',
              code: 'CO',
              federationLink: '2deebc32-7622-446a-bb0a-f4bcd26178c9',
            },
            label: 'Админов Админ Админович - Инженер - Участок №1',
            updatedDate: '2023-12-19T09:49:49.429+00:00',
          },
          pabpRNpp: {
            id: 7,
            createdBy: null,
            createdDate: '2023-03-02T13:27:25.027+00:00',
            updatedBy: null,
            updatedDate: null,
            shortName: 'ЛЕН',
            fullName: 'Ленинградская АЭС',
            code: 'LEN',
            priznak: 'AES',
            label: 'Ленинградская АЭС',
          },
          nonRemovable: true,
        },
        {
          id: '3e9647a095a',
          isTableInstruction: true,
          status: {
            id: 63,
            code: 'ASSIGN_NEW',
            status: 'Новый',
            docType: {
              id: 'ASSIGN',
              name: 'Поручение',
              viewLink: '/instructions/view/',
              dbTable: 'assign_f_doc',
            },
            label: 'Новый',
          },
          type: {
            id: 2,
            name: 'Стандартный',
            code: 'STANDARD',
          },
          dueNumber: 11,
          assignee: '014ffb3a-5bf4-48a1-8f02-64c22be0d003',
          approver: '014ffb3a-5bf4-48a1-8f02-64c22be0d003',
          body: 'Ознакомиться с результатами согласования ФПП/ФСС, оповестить ответственное за внедрение подразделение',
          initiator: {
            id: '61fa7ea7-0daa-461c-8413-cb96c77cf2d9',
            unsiUserId: null,
            firstName: 'Админ Админович',
            lastName: 'Админов',
            roles: [
              {
                id: 'f05d2f38-7e77-4ed1-ad6b-1a0e79412a79',
                name: 'Ответственный за отправку КП ОЭ',
                code: 'SENDER-KP-OE',
                realmId: 'PABP',
              },
              {
                id: 'b697c922-5a7c-4d72-ab60-2f46f6b55c3a',
                name: 'Ответственный за работу с карточками СНУ',
                code: 'SNU_RESPONSIBLE',
                realmId: 'PABP',
              },
              {
                id: '87a42af9-978f-442a-831c-be431d31ad96',
                name: 'Администратор ПАБП',
                code: 'admin',
                realmId: 'PABP',
              },
              {
                id: '79a280fe-f0a8-4bcc-b64c-71ae1a3d43c0',
                name: 'Базовый пользователь ПАиО',
                code: 'BASE_USER_PAIO',
                realmId: 'PABP',
              },
              {
                id: '3b25b467-a793-4e94-9532-4f6c877140f8',
                name: 'Ответственный за сбор данных',
                code: 'DATA_EXTRACTOR',
                realmId: 'PABP',
              },
              {
                id: '466e18dd-e459-4c76-be32-cbf0845c60c0',
                name: 'Ответственный ОИОЭиРН (анализ СНУ)',
                code: 'SNU_OIOEIRN',
                realmId: 'PABP',
              },
            ],
            subdivision: '128467',
            subdivisionTxt: 'Участок №1',
            groups: [
              {
                id: '5c0d2e87-b013-49c1-ada7-5f449566bb28',
                name: 'BAL',
              },
            ],
            email: 'admin_admin@click-group.ru',
            realmId: 'PABP',
            login: 'admin',
            created: '2023-02-14T12:48:02.629+00:00',
            password: '',
            active: true,
            isUnsi: false,
            position: 'Инженер',
            domain: {
              id: 1,
              loginPrefix: 'co',
              description: 'Ldap Центрального Аппарата',
              alias: 'Центральный аппарат',
              code: 'CO',
              federationLink: '2deebc32-7622-446a-bb0a-f4bcd26178c9',
            },
            label: 'Админов Админ Админович - Инженер - Участок №1',
            updatedDate: '2023-12-19T09:49:49.429+00:00',
          },
          pabpRNpp: {
            id: 8,
            createdBy: null,
            createdDate: '2023-03-02T13:27:25.027+00:00',
            updatedBy: null,
            updatedDate: null,
            shortName: 'НВО',
            fullName: 'Нововоронежская АЭС',
            code: 'NVO',
            priznak: 'AES',
            label: 'Нововоронежская АЭС',
          },
          nonRemovable: true,
        },
        {
          id: 'e9647a095ab',
          isTableInstruction: true,
          status: {
            id: 63,
            code: 'ASSIGN_NEW',
            status: 'Новый',
            docType: {
              id: 'ASSIGN',
              name: 'Поручение',
              viewLink: '/instructions/view/',
              dbTable: 'assign_f_doc',
            },
            label: 'Новый',
          },
          type: {
            id: 2,
            name: 'Стандартный',
            code: 'STANDARD',
          },
          dueNumber: 11,
          assignee: '56eed081-d352-410c-83a1-db2b654eb641',
          approver: '56eed081-d352-410c-83a1-db2b654eb641',
          body: 'Ознакомиться с результатами согласования ФПП/ФСС, оповестить ответственное за внедрение подразделение',
          initiator: {
            id: '61fa7ea7-0daa-461c-8413-cb96c77cf2d9',
            unsiUserId: null,
            firstName: 'Админ Админович',
            lastName: 'Админов',
            roles: [
              {
                id: 'f05d2f38-7e77-4ed1-ad6b-1a0e79412a79',
                name: 'Ответственный за отправку КП ОЭ',
                code: 'SENDER-KP-OE',
                realmId: 'PABP',
              },
              {
                id: 'b697c922-5a7c-4d72-ab60-2f46f6b55c3a',
                name: 'Ответственный за работу с карточками СНУ',
                code: 'SNU_RESPONSIBLE',
                realmId: 'PABP',
              },
              {
                id: '87a42af9-978f-442a-831c-be431d31ad96',
                name: 'Администратор ПАБП',
                code: 'admin',
                realmId: 'PABP',
              },
              {
                id: '79a280fe-f0a8-4bcc-b64c-71ae1a3d43c0',
                name: 'Базовый пользователь ПАиО',
                code: 'BASE_USER_PAIO',
                realmId: 'PABP',
              },
              {
                id: '3b25b467-a793-4e94-9532-4f6c877140f8',
                name: 'Ответственный за сбор данных',
                code: 'DATA_EXTRACTOR',
                realmId: 'PABP',
              },
              {
                id: '466e18dd-e459-4c76-be32-cbf0845c60c0',
                name: 'Ответственный ОИОЭиРН (анализ СНУ)',
                code: 'SNU_OIOEIRN',
                realmId: 'PABP',
              },
            ],
            subdivision: '128467',
            subdivisionTxt: 'Участок №1',
            groups: [
              {
                id: '5c0d2e87-b013-49c1-ada7-5f449566bb28',
                name: 'BAL',
              },
            ],
            email: 'admin_admin@click-group.ru',
            realmId: 'PABP',
            login: 'admin',
            created: '2023-02-14T12:48:02.629+00:00',
            password: '',
            active: true,
            isUnsi: false,
            position: 'Инженер',
            domain: {
              id: 1,
              loginPrefix: 'co',
              description: 'Ldap Центрального Аппарата',
              alias: 'Центральный аппарат',
              code: 'CO',
              federationLink: '2deebc32-7622-446a-bb0a-f4bcd26178c9',
            },
            label: 'Админов Админ Админович - Инженер - Участок №1',
            updatedDate: '2023-12-19T09:49:49.429+00:00',
          },
          pabpRNpp: {
            id: 2,
            createdBy: '61fa7ea7-0daa-461c-8413-cb96c77cf2d9',
            createdDate: '2023-03-02T13:27:25.027+00:00',
            updatedBy: '61fa7ea7-0daa-461c-8413-cb96c77cf2d9',
            updatedDate: '2023-05-04T11:02:34.116+00:00',
            shortName: 'БЕЛ',
            fullName: 'Белоярская АЭС',
            code: 'BEL',
            priznak: 'AES',
            label: 'Белоярская АЭС',
          },
          nonRemovable: true,
        },
      ],
      isFromPrg: null,
      oldNarReport: null,
      orderOwnerLogin: null,
      taskDefinition: {
        PP: 398,
      },
      agentList: null,
      isShort: null,
      attachedLinkTemp: [],
      OTKLON_EXPERT_DKBiP: null,
      attachedFileTemp: [],
      dataExtractorLogin: null,
      actionResultive: null,
      processDescr: 'ФПП/ФСС',
      projectRepeatedState: null,
      oldOtklonReport: null,
      snusToSave: null,
      orderExecutorApproverLogin: null,
      isShortBranch: null,
      CHAIRMAN_COMMISION: null,
      initiatorLogin: '61fa7ea7-0daa-461c-8413-cb96c77cf2d9',
      referenceTables: null,
      responsibleLogin: null,
      expertVniaesLogin: null,
      isAdditionalInvestigation: null,
      isFromAct: null,
      startDate: null,
    },
  },
];
