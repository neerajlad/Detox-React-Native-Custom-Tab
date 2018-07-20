# Error details

Steps to install Detox : https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md
Steps to Run Detox on Android : https://github.com/wix/detox/blob/master/docs/README.md

# Requirement : I want to generate ./gradlew assembleAndroidTest
# Note : I am able to generate ./gradlew assembleDebug*

# CF-LP00152:android user$ ./gradlew assembleAndroidTest

> Configure project :app 
Configuration 'compile' in project ':app' is deprecated. Use 'implementation' instead.
The CompileOptions.bootClasspath property has been deprecated and is scheduled to be removed in Gradle 5.0. Please use the CompileOptions.bootstrapClasspath property instead.

> Configure project :react-native-custom-tabs 
Configuration 'compile' in project ':react-native-custom-tabs' is deprecated. Use 'implementation' instead.
Configuration 'testCompile' in project ':react-native-custom-tabs' is deprecated. Use 'testImplementation' instead.


FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':react-native-custom-tabs:transformDexArchiveWithExternalLibsDexMergerForDebugAndroidTest'.
> java.lang.RuntimeException: java.lang.RuntimeException: com.android.builder.dexing.DexArchiveMergerException: Unable to merge dex

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 1s
151 actionable tasks: 4 executed, 147 up-to-date