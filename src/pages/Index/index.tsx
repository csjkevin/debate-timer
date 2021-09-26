import React from "react";

import styles from "./index.module.css";
import IndexButton from "../../components/IndexButton";

const Index: React.FC = () => (
  <>
    <div className="title">辩论赛计时器</div>
    <div>
      <IndexButton linkTo="/stage1">1.立论陈词</IndexButton>
      <IndexButton linkTo="/stage2">2.一对一攻辩</IndexButton>
      <IndexButton linkTo="/stage3">3.自由辩论</IndexButton>
      <IndexButton linkTo="/stage4">4.总结陈词</IndexButton>
    </div>
    <div className={styles.copyright}>&copy; 2021 浙江省苍南中学</div>
  </>
);
export default Index;
