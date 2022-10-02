import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { teacherData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";

export default function Home() {
  return (
    <div className="home">
     <FeaturedInfo/>
      <Chart data={teacherData} title="Аналіз опитування про викладача" grid dataKey="Середня оцінка"/>
      <div className="homeWidgets">
        <WidgetSm/>
      </div>
    </div>
  );
}
