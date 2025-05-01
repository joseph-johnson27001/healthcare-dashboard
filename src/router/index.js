//Sidebar Links

import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/DashboardPage.vue";
import Appointments from "@/views/AppointmentsPage.vue";
import Patients from "@/views/PatientsPage.vue";
import Doctors from "@/views/DoctorsPage.vue";
import MedicalRecords from "@/views/MedicalRecordsPage.vue";
import Prescriptions from "@/views/PrescriptionsPage.vue";
import Analytics from "@/views/AnalyticsPage.vue";

// Specific links

import Doctor from "@/views/DoctorProfilePage.vue";
import Patient from "@/views/PatientProfilePage.vue";
import Appointment from "@/views/AppointmentPage.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/appointments", component: Appointments },
  { path: "/patients", component: Patients },
  { path: "/doctors", component: Doctors },
  { path: "/medical-records", component: MedicalRecords },
  { path: "/prescriptions", component: Prescriptions },
  { path: "/analytics", component: Analytics },
  { path: "/doctor/:id", component: Doctor },
  { path: "/patient/:id", component: Patient },
  { path: "/appointment/:id", component: Appointment },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach(() => {
  const mainContent = document.querySelector(".main-content");
  if (mainContent) {
    mainContent.scrollTop = 0;
  }
});

export default router;
