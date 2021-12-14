/**
 * nextjsでは標準で提供しているcssの当て方
 * ・対応したCSSファイルを用意する
 * ・importして当てる
 * ★★メリット★★
 *  別管理のためソース見通しがいい
 *  スコープが限定的であるため性能がいい
 * ★★デメリット★★
 *  ファイル数が多くなる
 */
import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- CSS Modules -</p>
      <button className={classes.button}>Fight!!</button>
    </div>
  );
};
