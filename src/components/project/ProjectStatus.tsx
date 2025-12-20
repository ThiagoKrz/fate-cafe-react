import { Progress } from "../ui/progress";

type Route = {
  label: string;
  value: number;
};

type Props = {
  routes: Record<string, Route[]>;
};

export default function ProjectStatus({ routes }: Props) {
  return (
    <section className="bg-[#3E322F] p-6 rounded-lg border border-[#5A4A44]">
      <h3 className="text-3xl font-bold text-[#D4A373] border-b border-[#5A4A44] pb-2 mb-6">
        Status do Projeto
      </h3>

      {Object.entries(routes).map(([routeName, progress]) => (
        <div key={routeName} className="mb-6">
          <h4 className="text-xl font-bold text-white mb-3 capitalize">
            Rota {routeName}
          </h4>

          <div className="space-y-4">
            {progress.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm text-[#D4A373] mb-1">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <Progress  value={item.value} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
