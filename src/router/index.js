//Sidebar Links

import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/DashboardPage.vue";
import Appointments from "@/views/AppointmentsPage.vue";
import Patients from "@/views/PatientsPage.vue";
import Doctors from "@/views/DoctorsPage.vue";
import MedicalRecords from "@/views/MedicalRecordsPage.vue";
import Prescriptions from "@/views/PrescriptionsPage.vue";
import Billing from "@/views/BillingPage.vue";
import Reports from "@/views/ReportsPage.vue";
import Settings from "@/views/SettingsPage.vue";

// Specific links

import Doctor from "@/views/DoctorProfilePage.vue";
import Patient from "@/views/PatientProfilePage.vue";
import Appointment from "@/views/AppointmentPage.vue";

import Logout from "@/views/LogoutPage.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/appointments", component: Appointments },
  { path: "/patients", component: Patients },
  { path: "/doctors", component: Doctors },
  { path: "/medical-records", component: MedicalRecords },
  { path: "/prescriptions", component: Prescriptions },
  { path: "/billing", component: Billing },
  { path: "/reports", component: Reports },
  { path: "/settings", component: Settings },

  { path: "/doctor/:id", component: Doctor },
  { path: "/patient/:id", component: Patient },
  { path: "/appointment/:id", component: Appointment },

  { path: "/logout", component: Logout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
