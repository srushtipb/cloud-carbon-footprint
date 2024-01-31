/*
 * © 2021 Thoughtworks, Inc.
 */

import { BigQueryDate } from '@google-cloud/bigquery'

const bigQueryDateOne: BigQueryDate = { value: '2020-11-02' }
const bigQueryDateTwo: BigQueryDate = { value: '2020-10-28' }
const bigQueryDateThree: BigQueryDate = { value: '2020-11-03' }
const bigQueryDateFour: BigQueryDate = { value: '2020-11-04' }
const bigQueryDateFive: BigQueryDate = { value: '2020-11-05' }
const accountId = 'test-account-id'
const accountName = 'test-account-name'

export const mockQueryResultsAppEngineSSDStorage: any[][] = [
  [
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'App Engine',
      usageType: 'Cloud Datastore Storage',
      usageUnit: 'byte-seconds',
      usageAmount: 2.83e16,
      cost: 5,
      machineType: null,
    },
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'App Engine',
      usageType: 'GCS Storage',
      usageUnit: 'byte-seconds',
      usageAmount: 380040914534400,
      cost: 10,
      machineType: null,
    },
  ],
]

export const mockQueryResultsCloudSQLSSDComputeEngineDataFlowHDD: any[][] = [
  [
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Cloud SQL',
      usageType: 'Storage PD SSD for DB in Americas',
      usageUnit: 'byte-seconds',
      usageAmount: 4.26e18,
      cost: 7,
      machineType: null,
    },
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Compute Engine',
      usageType: 'Compute optimized Core running in Americas',
      usageUnit: 'seconds',
      usageAmount: 80000,
      cost: 7,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Cloud Dataflow',
      usageType: 'Local Disk Time PD Standard Belgium',
      usageUnit: 'byte-seconds',
      usageAmount: 7.8e17,
      cost: 12,
      machineType: null,
    },
  ],
]

export const mockQueryResultsComputeEngineRam: any[][] = [
  [
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Compute engine',
      usageType: 'Flex Instance RAM',
      usageUnit: 'byte-seconds',
      usageAmount: 120,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'europe-west1',
      serviceName: 'Compute engine',
      usageType: 'N1 Predefined Instance Ram running in EMEA',
      usageUnit: 'byte-seconds',
      usageAmount: 260,
      cost: 8,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-central1',
      serviceName: 'Compute engine',
      usageType: 'E2 Instance Ram running in Americas',
      usageUnit: 'byte-seconds',
      usageAmount: 380,
      cost: 5,
      machineType: null,
    },
  ],
]

export const mockQueryResultsGPUMachineTypes: any[][] = [
  [
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Compute engine',
      usageType: 'Nvidia Tesla V100 GPU running in Americas',
      usageUnit: 'seconds',
      usageAmount: 3600,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'europe-west1',
      serviceName: 'Compute engine',
      usageType: 'Nvidia Tesla A100 GPU running in Americas',
      usageUnit: 'seconds',
      usageAmount: 3600,
      cost: 8,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'europe-west1',
      serviceName: 'Notebooks',
      usageType: 'Notebooks GPU Standard',
      usageUnit: 'seconds',
      usageAmount: 3600,
      cost: 8,
      machineType: null,
    },
  ],
]

export const mockQueryResultsUnknownUsages: any[][] = [
  [
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Compute engine',
      usageType: 'Vpn Tunnel',
      usageUnit: 'byte-seconds',
      usageAmount: 120,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Bitnami Elasticsearch Certified by Bitnami',
      usageType: 'Licensing Fee for Bitnami Elasticsearch',
      usageUnit: 'seconds',
      usageAmount: 25438523,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Cloud DNS',
      usageType: 'ManagedZone',
      usageUnit: 'seconds',
      usageAmount: 1010797200,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Cloud Key Management Service (KMS)',
      usageType: 'Active software symmetric key versions',
      usageUnit: 'seconds',
      usageAmount: 41330372438,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Cloud Machine Learning Engine',
      usageType: 'Online Prediction Node-Hours (US) for mls1-c1-m2.',
      usageUnit: 'seconds',
      usageAmount: 14551,
      cost: 10,
      machineType: null,
    },
  ],
]

export const mockQueryResultsUnknownAndCloudSQLCompute: any[][] = [
  [
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Cloud SQL',
      usageType:
        'Cloud SQL for PostgreSQL: Zonal - IP address reservation in Americas',
      usageUnit: 'seconds',
      usageAmount: 14551,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Cloud SQL',
      usageType: 'IP address idling in seconds for DB in Americas',
      usageUnit: 'seconds',
      usageAmount: 18198540,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Cloud SQL',
      usageType:
        'Cloud SQL for MySQL: Zonal - 4 vCPU + 15GB RAM in Los Angeles',
      usageUnit: 'seconds',
      usageAmount: 50000,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Cloud SQL',
      usageType: 'Cloud SQL: vCPU in Americas',
      usageUnit: 'seconds',
      usageAmount: 94360227,
      cost: 13,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Cloud SQL',
      usageType:
        'DB generic Small instance with 1 VCPU running in Americas (with 30% promotional discount)',
      usageUnit: 'seconds',
      usageAmount: 26316000,
      cost: 13,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Cloud SQL',
      usageType: 'Cloud SQL: Small instance in Northern Virginia',
      usageUnit: 'seconds',
      usageAmount: 1112952,
      cost: 13,
      machineType: null,
    },
  ],
]
export const mockQueryAppEngineComputeUnknownRegion: any[][] = [
  [
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'App Engine',
      usageType: 'Backend Instances',
      usageUnit: 'seconds',
      usageAmount: 14551,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Cloud Dataflow',
      usageType: 'vCPU Time Batch Iowa',
      usageUnit: 'seconds',
      usageAmount: 1141961,
      cost: 190,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: null,
      serviceName: 'App Engine',
      usageType: 'Cloud Datastore Storage',
      usageUnit: 'byte-seconds',
      usageAmount: 2.83e16,
      cost: 5,
      machineType: null,
    },
  ],
]

export const mockQueryNetworkingWithIngress: any[][] = [
  [
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'App Engine',
      usageType: 'Cloud Firestore Google Egress from APAC to the Americas',
      usageUnit: 'bytes',
      usageAmount: 165007339,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Compute Engine',
      usageType: 'Network Ingress via Carrier Peering Network - EMEA Based',
      usageUnit: 'bytes',
      usageAmount: 165007339,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Cloud Storage',
      usageType: 'Download Australia',
      usageUnit: 'bytes',
      usageAmount: 2597445774,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'europe-central2',
      serviceName: 'Cloud Pub/Sub',
      usageType: 'Download Australia',
      usageUnit: 'bytes',
      usageAmount: 2597445774,
      cost: 10,
      machineType: null,
    },
  ],
]

export const mockQueryComputeWithDifferentMachineTypes: any[][] = [
  [
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Compute Engine',
      usageType: 'Small Instance with 1 VCPU running in EMEA',
      usageUnit: 'seconds',
      usageAmount: 17512304,
      cost: 10,
      machineType: 'g1-small',
    },
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Compute Engine',
      usageType: 'N1 Predefined Instance Core running in Americas',
      usageUnit: 'seconds',
      usageAmount: 80000,
      cost: 7,
      machineType: 'n1-standard-1',
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Compute Engine',
      usageType: 'E2 Instance Core running in Americas',
      usageUnit: 'seconds',
      usageAmount: 9234985,
      cost: 10,
      machineType: 'e2-medium',
    },
  ],
]

export const mockQueryComputeWithDifferentMachineTypesForEmbodiedEmissions: any[][] =
  [
    [
      {
        timestamp: bigQueryDateOne,
        accountId: accountId,
        accountName: accountName,
        region: 'us-central1',
        serviceName: 'Compute Engine',
        usageType: 'N1 Predefined Instance Core running in Americas',
        usageUnit: 'seconds',
        usageAmount: 86400,
        cost: 0.758656,
        machineType: 'n1-standard-1',
      },
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'us-central1',
        serviceName: 'Compute Engine',
        usageType: 'E2 Instance Core running in Americas',
        usageUnit: 'seconds',
        usageAmount: 259200,
        cost: 1.570404,
        machineType: 'e2-medium',
      },
      {
        timestamp: bigQueryDateThree,
        accountId: accountId,
        accountName: accountName,
        region: 'us-central1',
        serviceName: 'Compute Engine',
        usageType: 'N2 Predefined Instance Core running in Americas',
        usageUnit: 'seconds',
        usageAmount: 345599.5396,
        cost: 0.959995,
        machineType: 'n2-standard-2',
      },
      {
        timestamp: bigQueryDateFour,
        accountId: accountId,
        accountName: accountName,
        region: 'asia-south1',
        serviceName: 'Compute Engine',
        usageType: 'N1 Shared Core Instance running in Mumbai',
        usageUnit: 'seconds',
        usageAmount: 93698,
        cost: 0.681886,
        machineType: 'f1-micro',
      },
      {
        timestamp: bigQueryDateFive,
        accountId: accountId,
        accountName: accountName,
        region: 'asia-south1',
        serviceName: 'Compute Engine',
        usageType: 'N1 Shared Core Instance running in Mumbai',
        usageUnit: 'seconds',
        usageAmount: 93698,
        cost: 0.681886,
        machineType: null,
      },
    ],
  ]

export const mockQueryCloudStorageWithReplicationFactors: any[][] = [
  [
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'nam4',
      serviceName: 'Cloud Storage',
      usageType: 'Standard Storage Iowa/South Carolina Dual-region',
      usageUnit: 'byte-seconds',
      usageAmount: 491520.0,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-central1',
      serviceName: 'Cloud Storage',
      usageType: 'Standard Storage US Regional',
      usageUnit: 'byte-seconds',
      usageAmount: 117334055659520.0,
      cost: 120,
      machineType: null,
    },
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us',
      serviceName: 'Cloud Storage',
      usageType: 'Standard Storage US Multi-region',
      usageUnit: 'byte-seconds',
      usageAmount: 5.15376128e8,
      cost: 220,
      machineType: null,
    },
  ],
]

export const mockQueryComputeEngineCloudFilestoreCloudSQLWithReplicationFactors: any[][] =
  [
    [
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'us-east1',
        serviceName: 'Compute Engine',
        usageType: 'Storage PD Capacity',
        usageUnit: 'byte-seconds',
        usageAmount: 1.571922596855808e15,
        cost: 150,
        machineType: null,
      },
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'asia-northeast1',
        serviceName: 'Compute Engine',
        usageType: 'Regional SSD backed PD Capacity in Japan',
        usageUnit: 'byte-seconds',
        usageAmount: 123456789,
        cost: 150,
        machineType: null,
      },
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'asia',
        serviceName: 'Compute Engine',
        usageType: 'Storage PD Snapshot in Asia',
        usageUnit: 'byte-seconds',
        usageAmount: 123456789,
        cost: 150,
        machineType: null,
      },
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'asia-south1',
        serviceName: 'Compute Engine',
        usageType: 'Storage Machine Image in Mumbai',
        usageUnit: 'byte-seconds',
        usageAmount: 123456789,
        cost: 150,
        machineType: null,
      },
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'us-central1',
        serviceName: 'Cloud Filestore',
        usageType:
          'Filestore Capacity Basic HDD (Standard) Iowa/South Carolina/Oregon',
        usageUnit: 'byte-seconds',
        usageAmount: 9.49978046398464e16,
        cost: 70,
        machineType: null,
      },
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'us-east4',
        serviceName: 'Cloud SQL',
        usageType:
          'Cloud SQL for PostgreSQL: Regional - Standard storage in Northern Virginia',
        usageUnit: 'byte-seconds',
        usageAmount: 6.57129996288e14,
        cost: 80,
        machineType: null,
      },
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'asia-south1',
        serviceName: 'Cloud SQL',
        usageType: 'Storage PD SSD for HA Postgres DB in Mumbai',
        usageUnit: 'byte-seconds',
        usageAmount: 987654321,
        cost: 80,
        machineType: null,
      },
    ],
  ]

export const mockQueryCloudSpannerKubernetesEngineAndRequestsUsageTypesWithReplicationFactors: any[][] =
  [
    [
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'us-central1',
        serviceName: 'Cloud Memorystore for Redis',
        usageType: 'Redis Capacity Basic M1 Iowa/South Carolina/Oregon',
        usageUnit: 'byte-seconds',
        usageAmount: 9.27712935936e13,
        cost: 170,
        machineType: null,
      },
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'asia-south1',
        serviceName: 'Cloud Spanner',
        usageType: 'Server Node for Regional Configuration (Mumbai, India)',
        usageUnit: 'seconds',
        usageAmount: 4.3932929e7,
        cost: 50,
        machineType: null,
      },
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'asia-east1',
        serviceName: 'Cloud Spanner',
        usageType: 'Storage for Multi-Region Configuration (Asia-Pacific)',
        usageUnit: 'byte-seconds',
        usageAmount: 4.30631674707968e15,
        cost: 150,
        machineType: null,
      },
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'asia-south1',
        serviceName: 'Kubernetes Engine',
        usageType: 'Regional Kubernetes Clusters',
        usageUnit: 'seconds',
        usageAmount: 4.34927505e8,
        cost: 150,
        machineType: null,
      },
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'us-central1',
        serviceName: 'Kubernetes Engine',
        usageType: 'Autopilot Kubernetes Clusters',
        usageUnit: 'seconds',
        usageAmount: 3.6839623e7,
        cost: 350,
        machineType: null,
      },
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'europe',
        serviceName: 'App Engine',
        usageType: 'Cloud Datastore Read Ops',
        usageUnit: 'requests',
        usageAmount: 40232,
        cost: 10,
        machineType: null,
      },
    ],
  ]

export const mockQueryMemoryStoreWithReplicationFactors: any[][] = [
  [
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-central1',
      serviceName: 'Cloud Memorystore for Redis',
      usageType: 'Redis Capacity Basic M1 Iowa/South Carolina/Oregon',
      usageUnit: 'byte-seconds',
      usageAmount: 9.27712935936e13,
      cost: 170,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-central2',
      serviceName: 'Cloud Memorystore for Redis',
      usageType: 'Redis Capacity Standard M1 Belgium',
      usageUnit: 'byte-seconds',
      usageAmount: 9.27712935936e13,
      cost: 170,
      machineType: null,
    },
  ],
]

export const mockQueryReclassifiedUnknowns: any[][] = [
  [
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Compute Engine',
      usageType: 'E2 Instance Core running in Americas',
      usageUnit: 'seconds',
      usageAmount: 9234985,
      cost: 456,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'App Engine',
      usageType: 'Backend Instances',
      usageUnit: 'seconds',
      usageAmount: 436294571,
      cost: 6018.6968,
      machineType: null,
    },
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'App Engine',
      usageType: 'Cloud Datastore Storage',
      usageUnit: 'byte-seconds',
      usageAmount: 28276395699693600,
      cost: 789,
      machineType: null,
    },
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Stackdriver Monitoring',
      usageType: 'Metric Volume',
      usageUnit: 'byte-seconds',
      usageAmount: 92392,
      cost: 0.012744,
      machineType: null,
    },
    {
      timestamp: bigQueryDateThree,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Cloud Storage',
      usageType: 'Download Australia',
      usageUnit: 'bytes',
      usageAmount: 2597445774,
      cost: 123,
      machineType: null,
    },
    {
      timestamp: bigQueryDateThree,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Cloud Run',
      usageType:
        'Cloud Run Network Internet Egress Intercontinental (Excl Oceania and China)',
      usageUnit: 'bytes',
      usageAmount: 7316020648,
      cost: 0.816998,
      machineType: null,
    },
    {
      timestamp: bigQueryDateFour,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Compute Engine',
      usageType: 'Flex Instance RAM',
      usageUnit: 'byte-seconds',
      usageAmount: 987,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateFour,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Cloud Run',
      usageType: 'Memory Allocation Time',
      usageUnit: 'byte-seconds',
      usageAmount: 4817102712,
      cost: 25,
      machineType: null,
    },
    {
      timestamp: bigQueryDateFive,
      accountId: accountId,
      accountName: accountName,
      region: 'asia-south1',
      serviceName: 'Cloud Storage',
      usageType: 'Nearline Class B Operations',
      usageUnit: 'requests',
      usageAmount: 4,
      cost: 4.0e-6,
      machineType: null,
    },
    {
      timestamp: bigQueryDateFive,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Secret Manager',
      usageType: 'Secret version replica storage',
      usageUnit: 'seconds',
      usageAmount: 100000000,
      cost: 100,
      machineType: null,
    },
    {
      timestamp: bigQueryDateFive,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Secret Manager',
      usageType: 'Secret access operations',
      usageUnit: 'requests',
      usageAmount: 100000000,
      cost: 100,
      machineType: null,
    },
    {
      timestamp: bigQueryDateFive,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Cloud Key Management Service (KMS)',
      usageType: 'Active software symmetric key versions',
      usageUnit: 'seconds',
      usageAmount: 100000000,
      cost: 100,
      machineType: null,
    },
    {
      timestamp: bigQueryDateFive,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Cloud Key Management Service (KMS)',
      usageType: 'Cryptographic operations with a software symmetric key',
      usageUnit: 'requests',
      usageAmount: 100000000,
      cost: 100,
      machineType: null,
    },
  ],
]

export const mockQueryResultsWithTags: any[][] = [
  [
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'App Engine',
      usageType: 'Cloud Datastore Storage',
      usageUnit: 'byte-seconds',
      usageAmount: 2.83e16,
      cost: 5,
      machineType: null,
      tags: 'environment: dev',
      labels: 'project: ccf',
    },
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Compute Engine',
      usageType: 'Compute optimized Core running in Americas',
      usageUnit: 'seconds',
      usageAmount: 80000,
      cost: 7,
      machineType: null,
      tags: 'environment: prod',
      projectLabels: 'team: thoughtworks',
    },
  ],
]

export const mockQueryResultsWithNoTags: any[][] = [
  [
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'App Engine',
      usageType: 'Cloud Datastore Storage',
      usageUnit: 'byte-seconds',
      usageAmount: 2.83e16,
      cost: 5,
      machineType: null,
    },
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Compute Engine',
      usageType: 'Compute optimized Core running in Americas',
      usageUnit: 'seconds',
      usageAmount: 80000,
      cost: 7,
      machineType: null,
    },
  ],
]

export const mockQueryResultsForProjectFilter: any[][] = [
  [
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'App Engine',
      usageType: 'Cloud Datastore Storage',
      usageUnit: 'byte-seconds',
      usageAmount: 2.83e16,
      cost: 5,
      machineType: null,
      tags: 'environment: dev',
      labels: 'project: ccf',
    },
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Compute Engine',
      usageType: 'Compute optimized Core running in Americas',
      usageUnit: 'seconds',
      usageAmount: 80000,
      cost: 7,
      machineType: null,
      tags: 'environment: prod',
      projectLabels: 'team: thoughtworks',
    },
  ],
]
