import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import TimePicker from "react-native-simple-time-picker";

const App = () => {
  const [pickerMode, setPickerMode] = useState(null);
  const [duration, setDuration] = useState(60000);

  const showDatePicker = () => {
    setPickerMode("date");
  };

  const showTimePicker = () => {
    setPickerMode("time");
  };

  const hidePicker = () => {
    setPickerMode(null);
  };

  const handleConfirm = () => {
    let d = new Date(duration);
    console.warn(
      `A duration has been picked: ${d.getUTCHours()} Hours  ${d.getUTCMinutes()} Mins`
    );
    let Production = true;
    let dd = duration;
    if (!Production) {
      // Set duration as mm:ss vs. hh:mm
      dd /= 60;
    }
    /////    //    this.props.setTimer(dd);

    hidePicker();
  };
  const handleChange = (hr, min) => {
    console.warn(`New selection: ${hr}, ${min}`);
    setDuration((hr * 60 + min) * 60 * 1000);
  };
  const FASTTIME = false;
  const ddate = new Date(duration);
  return (
    <View style={style.root}>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <Button title="Show Time Picker" onPress={showTimePicker} />
      <DateTimePickerModal
        customPickerIOS={TimePicker}
        modalPropsIOS={{ supportedOrientations: ["portrait", "landscape"] }}
        date={ddate}
        isVisible={pickerMode !== null}
        mode={pickerMode}
        onConfirm={handleConfirm}
        selectedHours={ddate.getUTCHours()}
        selectedMinutes={ddate.getUTCMinutes()}
        onCancel={hidePicker}
        onChangeCustom={handleChange}
        headerTextIOS="Choose Duration"
        hoursUnit={FASTTIME ? " Min" : " Hr"}
        minutesUnit={FASTTIME ? " Sec" : " Min"}
      />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
