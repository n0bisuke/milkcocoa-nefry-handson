#include <Nefry.h>
#include <Nefry_Milkcocoa.h>

Nefry_Milkcocoa *milkcocoa;
 
char *datastore;
int red,green,blue;
void onsend(DataElement *elem) {//MilkcocoaのOn関数と同一
    //データストアにデータが届いたときに呼び出される
    red = elem->getInt("r");
    green = elem->getInt("g");
    blue = elem->getInt("b");
    Nefry.setLed(red,green,blue);//LEDがランダムに点灯します。
    String color="Red:";color+=red;color+=" Green:";color+=green;color+=" Blue:";color+=blue;
    Nefry.println(color);//Nefry consoleで色を表示
}
 
void setup() {
  milkcocoa->print();//Setup ModuleページにAPPIDの表示をする
  milkcocoa = Nefry_Milkcocoa::begin();//milkcocoaと接続に必要になる処理をします。
  datastore = Nefry.getConfStr(3);//Setup Moduleページに入力されたデータストア名を保存します。
  Nefry.println( milkcocoa->on( datastore, "send", onsend) ? "Milkcocoa onSend OK" : "Milkcocoa onSend NG" );//on関数を有効にします。
}

void loop() {
  Nefry.println( milkcocoa->loop(10000)? "Milkcocoa Connect OK" : "Milkcocoa Connect NG" );//10秒以内にMilkcocoaに接続できればokと表示されます。
}
