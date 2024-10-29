import { Form, Input, Button, Select, Layout, message, Row, Col } from "antd";
import axios from "axios";
import { useState } from "react";

const { Content } = Layout;
const { Option } = Select;

const PageContent = () => {
  const [form] = Form.useForm();
  const [idNumber, setIdNumber] = useState("");

  const handleFormSubmit = async (values: any) => {
    try {
      await axios.post("/api/saveFormData", values);
      message.success("تم حفظ بيانات النموذج بنجاح!");
      form.resetFields();
    } catch (error) {
      message.error("فشل في حفظ بيانات النموذج");
      console.error(error);
    }
  };

  // Handler to convert Arabic numbers to English numbers
  const handleIdNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const arabicToEnglishMap = {
      '٠': '0', '١': '1', '٢': '2', '٣': '3', '٤': '4',
      '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9'
    };
    const value = e.target.value.replace(/[٠-٩]/g, (char: string) => arabicToEnglishMap[char as keyof typeof arabicToEnglishMap]);
    setIdNumber(value);
    form.setFieldsValue({ idNumber: value });
  };



  return (
    <Content className="flex items-center justify-center h-screen bg-gray-100 px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg" dir="rtl">
        <h2 className="text-2xl font-bold mb-4 text-center font-janna">نموذج التسجيل</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFormSubmit}
          autoComplete="off"
          style={{ textAlign: "right" }}
          className="font-janna"
        >
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                label="الاسم"
                name="name"
                rules={[{ required: true, message: "يرجى إدخال الاسم" }]}
              >
                <Input placeholder="الاسم" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label="العمر"
                name="age"
                rules={[
                  { required: true, message: "يرجى إدخال العمر" },
                  { type: "number", min: 0, max: 120, message: "يرجى إدخال عمر صحيح" },
                ]}
              >
                <Input type="number" placeholder="العمر" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                label="رقم الهوية"
                name="idNumber"
                rules={[{ required: true, message: "يرجى إدخال رقم الهوية" }]}
              >
                <Input
                  placeholder="رقم الهوية"
                  value={idNumber}
                  onChange={handleIdNumberChange}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label="الجنس"
                name="gender"
                rules={[{ required: true, message: "يرجى تحديد الجنس" }]}
              >
                <Select placeholder="اختر الجنس">
                  <Option value="male">ذكر</Option>
                  <Option value="female">أنثى</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                label="الدولة"
                name="country"
                rules={[{ required: true, message: "يرجى إدخال الدولة" }]}
              >
                <Input placeholder="الدولة" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label="المؤهل"
                name="qualification"
                rules={[{ required: true, message: "يرجى إدخال المؤهل" }]}
              >
                <Input placeholder="المؤهل" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24}>
              <Form.Item
                label="الدراسة"
                name="education"
                rules={[{ required: true, message: "يرجى إدخال الدراسة" }]}
              >
                <Input placeholder="الدراسة" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full mt-4">
              إرسال
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Content>
  );
};

export default PageContent;
