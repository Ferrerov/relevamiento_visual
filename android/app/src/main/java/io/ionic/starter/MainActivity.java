package io.ionic.starter;

import android.os.Bundle;
import android.os.PersistableBundle;

import androidx.annotation.Nullable;
import androidx.core.splashscreen.SplashScreen;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(@Nullable Bundle savedInstanceState, @Nullable PersistableBundle persistentState) {
    SplashScreen.installSplashScreen(this);
    super.onCreate(savedInstanceState, persistentState);
    setContentView(R.layout.activity_main);
  }
}
