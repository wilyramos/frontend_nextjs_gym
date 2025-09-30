// File: components/admin/Members/UserDetails.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import type { TUser } from "@/src/types";

export default function UserDetails({ user }: { user: TUser }) {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            {/* Header con datos del usuario */}
            <div className="flex items-start justify-between mb-6">
                <div className="flex gap-4">
                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <div className="relative w-16 h-16 text-xs text-gray-500 text-center items-center justify-center flex">
            
                            No Image
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">{user.name}</h2>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <p className="text-sm text-gray-600">{user.document || "Sin documento"}</p>
                        <p className="text-sm text-gray-600">{user.phone || "—"}</p>
                    </div>
                </div>

                
            </div>

            {/* Etiquetas */}
            <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500">Etiquetas</h3>
                <p className="text-gray-400 text-sm">Sin etiquetas</p>
            </div>

            {/* Tabs principales */}
            <Tabs defaultValue="planificacion" className="w-full">
                <TabsList className="grid grid-cols-4 mb-4 border-b">
                    <TabsTrigger value="planificacion">Planificación</TabsTrigger>
                    <TabsTrigger value="metricas">Métricas</TabsTrigger>
                    <TabsTrigger value="historial">Historial de ejercicios</TabsTrigger>
                    <TabsTrigger value="documentos">Documentos</TabsTrigger>
                </TabsList>

                {/* Planificación (calendario) */}
                <TabsContent value="planificacion">
                    <h4 className="font-semibold mb-2">Planificación mensual</h4>
                    <Calendar mode="single" className="rounded-md border" />
                </TabsContent>

                {/* Métricas (peso, IMC, progreso) */}
                <TabsContent value="metricas">
                    <h4 className="font-semibold mb-2">Métricas del Miembro</h4>
                    <ul className="space-y-2 text-sm">
                        <li><strong>Peso:</strong> 70kg</li>
                        <li><strong>Altura:</strong> 1.75m</li>
                        <li><strong>IMC:</strong> 22.9</li>
                    </ul>
                </TabsContent>

                {/* Historial */}
                <TabsContent value="historial">
                    <h4 className="font-semibold mb-2">Historial de Ejercicios</h4>
                    <p className="text-sm text-gray-500">No hay ejercicios registrados.</p>
                </TabsContent>

                {/* Documentos */}
                <TabsContent value="documentos">
                    <h4 className="font-semibold mb-2">Documentos</h4>
                    <p className="text-sm text-gray-500">Sin documentos cargados.</p>
                </TabsContent>
            </Tabs>
        </div>
    );
}
